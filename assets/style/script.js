(function () {
    'use strict';

    var heroWrap  = document.getElementById('cleoHero');
    var heroInner = document.getElementById('cleoHeroInner');

    /* ─── Scale hero to fill viewport width ─── */
    function scaleHero() {
        var designWidth = 1675;
        var scale = window.innerWidth / designWidth;
        heroInner.style.transform       = 'scale(' + scale + ')';
        heroInner.style.transformOrigin = 'top left';
        // heroWrap.style.height           = Math.round(928 * scale) + 'px';
    }

    scaleHero();
    window.addEventListener('resize', scaleHero);

    /* ─── GSAP Draggable with elastic snap-back ─── */
    gsap.registerPlugin(Draggable);

    var cards = document.querySelectorAll('.c-card');

    cards.forEach(function (card) {

        /* Apply initial rotation from data attribute via GSAP
           (keeps GSAP in full control of the transform) */
        var rotation = parseFloat(card.dataset.rotate) || 0;
        gsap.set(card, { rotation: rotation });

        Draggable.create(card, {
            type: 'x,y',
            zIndexBoost: false,

            onDragStart: function () {
                gsap.killTweensOf(this.target);
                gsap.set(this.target, { zIndex: 200 });
            },

            onDragEnd: function () {
                var t = this.target;
                gsap.to(t, {
                    x: 0,
                    y: 0,
                    duration: 0.85,
                    ease: 'elastic.out(1, 0.45)',
                    onComplete: function () {
                        gsap.set(t, { zIndex: 5 });
                    }
                });
            }
        });
    });

})();

/* ─── Card entrance animation — one by one, staggered ─── */
(function () {
    var dur  = 0.45;
    var ease = 'power3.out';
    var gap  = '+=0.13';

    /* hide all cards + badge before animation starts */
    gsap.set('.c-card', { autoAlpha: 0 });
    gsap.set('.mktg-badge', { autoAlpha: 0 });

    var tl = gsap.timeline({ delay: 0.2 });

    /* LEFT SVG cards — top → bottom, slide in from left */
    tl.fromTo('.card-1', { x: -160, autoAlpha: 0 }, { x: 0, autoAlpha: 1, duration: dur, ease: ease })
      .fromTo('.card-2', { x: -160, autoAlpha: 0 }, { x: 0, autoAlpha: 1, duration: dur, ease: ease }, gap)
      .fromTo('.card-3', { x: -160, autoAlpha: 0 }, { x: 0, autoAlpha: 1, duration: dur, ease: ease }, gap)
      .fromTo('.card-4', { x: -160, autoAlpha: 0 }, { x: 0, autoAlpha: 1, duration: dur, ease: ease }, gap)

    /* RIGHT text cards — bottom → top, slide in from right */
      .fromTo('.card-12', { x: 160, autoAlpha: 0 }, { x: 0, autoAlpha: 1, duration: dur, ease: ease }, '+=0.18')
      .fromTo('.card-11', { x: 160, autoAlpha: 0 }, { x: 0, autoAlpha: 1, duration: dur, ease: ease }, gap)
      .fromTo('.card-10', { x: 160, autoAlpha: 0 }, { x: 0, autoAlpha: 1, duration: dur, ease: ease }, gap)
      .fromTo('.card-9',  { x: 160, autoAlpha: 0 }, { x: 0, autoAlpha: 1, duration: dur, ease: ease }, gap)

    /* TOP text cards — left → right, slide in from top */
      .fromTo('.card-5', { y: -80, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: dur, ease: ease }, '+=0.18')
      .fromTo('.card-6', { y: -80, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: dur, ease: ease }, gap)
      .fromTo('.card-7', { y: -80, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: dur, ease: ease }, gap)
      .fromTo('.card-8', { y: -80, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: dur, ease: ease }, gap)

    /* Marketing badge — toss in AFTER all cards are done */
      .fromTo('.mktg-badge',
          { y: -90, x: 25, rotation: 22, scale: 0.55, autoAlpha: 0 },
          { y:   0, x:  0, rotation: -4, scale: 1,    autoAlpha: 1, duration: 0.85, ease: 'elastic.out(1, 0.55)' },
          '+=0.2'
      );
})();

/* ─── Typing animation for ALL .text-cta elements (hero + any section below) ─── */
(function () {
    function typeElement(el) {
        if (el.dataset.cleoTyped) return;
        el.dataset.cleoTyped = 'true';

        // Check if element contains an image
        var img = el.querySelector('img');
        var original = el.dataset.original || el.textContent.trim();
        el.dataset.original = original;
        if (!original && !img) return;

        // If there's an image, preserve it
        if (img) {
            var imgHTML = img.outerHTML;
            el.textContent = '';
            el.innerHTML = imgHTML; // Keep image, clear text
            return; // Don't type, just show image
        }

        el.textContent = '';
        var i = 0;
        function tick() {
            if (i <= original.length) {
                el.textContent = original.substring(0, i);
                i++;
                var delay = i < 4 ? 120 : i < 10 ? 80 : 55;
                setTimeout(tick, delay);
            } else {
                // Typing complete - trigger marketing badge if it's nearby
                el.dataset.typingComplete = 'true';
                triggerNearbyMarketingBadge(el);
            }
        }
        tick();
    }

    function triggerNearbyMarketingBadge(textEl) {
        // Find marketing badge in the same section
        var section = textEl.closest('.why-head, .why-head1, .why-head2');
        if (!section) return;
        
        var badge = section.querySelector('.fiction, .m3, .m4');
        if (badge && !badge.classList.contains('is-visible')) {
            // Delay before showing badge
            setTimeout(function() {
                badge.classList.add('is-visible');
            }, 300);
        }
    }

    function isInViewport(el) {
        var r = el.getBoundingClientRect();
        return r.top < window.innerHeight && r.bottom > 0;
    }

    var els = document.querySelectorAll('.text-cta, .text-cta1, .text-cta2');

    els.forEach(function (el) {
        /* Store original text and check for images */
        var img = el.querySelector('img');
        el.dataset.original = el.textContent.trim();
        
        if (isInViewport(el)) {
            /* Already visible (hero) — clear text (but preserve image), then type after delay */
            if (!img) {
                el.textContent = '';
            }
            setTimeout(function () { typeElement(el); }, 400);
        } else {
            /* Below fold — clear text (but preserve image), type when visible */
            if (!img) {
                el.textContent = '';
            }
            
            var obs = new IntersectionObserver(function (entries, observer) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                        setTimeout(function () { typeElement(el); }, 200);
                        observer.disconnect();
                    }
                });
            }, { threshold: 0.2 });
            obs.observe(el);
        }
    });
})();
