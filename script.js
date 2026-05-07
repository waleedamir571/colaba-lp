/* ============================================================
   COLABA.AI – script.js
   GSAP 3 + ScrollTrigger  |  jQuery  |  Vanilla JS
============================================================ */

gsap.registerPlugin(ScrollTrigger);

/* ──────────────────────────────────────────────────
   0. AOS INITIALIZATION
────────────────────────────────────────────────── */
// Initialize AOS (Animate On Scroll)
document.addEventListener('DOMContentLoaded', function() {
  AOS.init({
    duration: 800,
    easing: 'ease-out-cubic',
    once: false,
    offset: 50,
    delay: 0,
    disable: false
  });
  AOS.refresh();
});

// Handle animations in both directions (up and down scroll)
window.addEventListener('scroll', function() {
  const elements = document.querySelectorAll('[data-aos]');
  
  elements.forEach(element => {
    const elementTop = element.getBoundingClientRect().top;
    const elementBottom = element.getBoundingClientRect().bottom;
    const windowHeight = window.innerHeight;
    
    // Check if element is in viewport
    if (elementTop < windowHeight && elementBottom > 0) {
      // Element is visible - apply animation
      element.classList.add('aos-animate');
    } else {
      // Element is not visible - remove animation so it can trigger again
      element.classList.remove('aos-animate');
    }
  });
}, { passive: true });

/* ──────────────────────────────────────────────────
   1. NAVBAR
────────────────────────────────────────────────── */
$(window).on('scroll', function(){
  $('#navbar').toggleClass('scrolled', $(this).scrollTop() > 30);
});

$('#hamburger').on('click', function(){
  $('#mobile-menu').toggleClass('open');
});
$('#mobile-menu a').on('click', function(){
  $('#mobile-menu').removeClass('open');
});

/* ──────────────────────────────────────────────────
   2. HERO ENTRANCE  (GSAP timeline)
────────────────────────────────────────────────── */
const heroTL = gsap.timeline({ delay: 0.3 });

// Y emblem
heroTL.to('#hero-emblem', {
  opacity: 1, scale: 1, duration: 0.7, ease: 'back.out(1.6)'
});

// Tagline
heroTL.from('#hero-tagline', {
  opacity: 0, y: 20, duration: 0.55, ease: 'power3.out'
}, '-=0.2');

// Email form
heroTL.to('#hero-email', {
  opacity: 1, y: 0, duration: 0.55, ease: 'power3.out'
}, '-=0.25');

// Mockup
heroTL.to('#hero-mockup', {
  opacity: 1, y: 0, duration: 0.85, ease: 'power3.out'
}, '-=0.3');

// Float cards staggered
heroTL.to(['#hf-left', '#hf-r1', '#hf-r2'], {
  opacity: 1, x: 0, stagger: 0.12, duration: 0.55, ease: 'power3.out'
}, '-=0.5');

// Gentle float loops
gsap.to('#hf-left', { y: -9, duration: 2.8, repeat: -1, yoyo: true, ease: 'sine.inOut' });
gsap.to('#hf-r1',   { y: -12, duration: 3.2, repeat: -1, yoyo: true, ease: 'sine.inOut', delay: 0.6 });
gsap.to('#hf-r2',   { y: -7,  duration: 3.8, repeat: -1, yoyo: true, ease: 'sine.inOut', delay: 1.1 });

/* ──────────────────────────────────────────────────
   3. TYPING ANIMATION - Hero + text-cta elements
────────────────────────────────────────────────── */

// Hero typing animation
const HEADING = "Your story deserves to be a book";
let charI = 0;
let isDeleting = false;

function typeNext() {
    if (!isDeleting) {
        // Typing forward
        if (charI <= HEADING.length) {
            let text = HEADING.substring(0, charI);
            // Sirf "book" word ko yellow karo
            text = text.replace(/book$/, '<span class="yellow">book</span>');
            $('#typed-text').html(text);
            charI++;
            const delay = charI < 6 ? 110 : charI < 18 ? 72 : 48;
            setTimeout(typeNext, delay);
        } else {
            // Wait at end, then start deleting
            setTimeout(() => {
                isDeleting = true;
                $('#type-cursor').css('opacity', 1);
                typeNext();
            }, 2000);
        }
    } else {
        // Deleting backward
        if (charI >= 0) {
            let text = HEADING.substring(0, charI);
            text = text.replace(/book$/, '<span class="yellow">book</span>');
            $('#typed-text').html(text);
            charI--;
            setTimeout(typeNext, 35);
        } else {
            // Reset and start typing again
            isDeleting = false;
            charI = 0;
            setTimeout(typeNext, 500);
        }
    }
}
setTimeout(typeNext, 1000);

// Typing animation for all .text-cta elements
function createTypeAnimation($element, initialDelay = 0) {
    const originalText = $element.text().trim();
    if (!originalText) return;
    
    let charIndex = 0;
    let isDeleting = false;
    
    function animateType() {
        if (!isDeleting) {
            // Typing forward
            if (charIndex <= originalText.length) {
                $element.text(originalText.substring(0, charIndex));
                charIndex++;
                const delay = charIndex < 6 ? 110 : charIndex < 20 ? 72 : 48;
                setTimeout(animateType, delay);
            } else {
                // Wait at end, then start deleting
                setTimeout(() => {
                    isDeleting = true;
                    animateType();
                }, 2500);
            }
        } else {
            // Deleting backward
            if (charIndex >= 0) {
                $element.text(originalText.substring(0, charIndex));
                charIndex--;
                setTimeout(animateType, 35);
            } else {
                // Reset and start typing again
                isDeleting = false;
                charIndex = 0;
                setTimeout(animateType, 500);
            }
        }
    }
    
    // Start animation after initial delay
    setTimeout(animateType, initialDelay);
}

// Apply typing animation to all .text-cta elements when they come into view
document.querySelectorAll('.text-cta').forEach((el, index) => {
    gsap.to(el, {
        scrollTrigger: {
            trigger: el,
            start: 'top 80%',
            onEnter: () => {
                // Only start animation once
                if (!el.dataset.animated) {
                    el.dataset.animated = 'true';
                    createTypeAnimation($(el), 300);
                }
            },
            once: true
        }
    });
});

/* ──────────────────────────────────────────────────
   4. GSAP FADE-IN  (.gsap-fadein elements)
────────────────────────────────────────────────── */
document.querySelectorAll('.gsap-fadein').forEach(el => {
  gsap.to(el, {
    scrollTrigger: { trigger: el, start: 'top 82%', once: true },
    opacity: 1, y: 0, duration: 0.75, ease: 'power3.out'
  });
});

/* ──────────────────────────────────────────────────
   5. WHY SECTION – cards entrance
────────────────────────────────────────────────── */
gsap.utils.toArray('.wcard').forEach((card, i) => {
  gsap.from(card, {
    scrollTrigger: { trigger: card, start: 'top 85%', once: true },
    opacity: 0, y: 50, duration: 0.65, delay: i * 0.12, ease: 'power3.out'
  });
});

/* ──────────────────────────────────────────────────
   6. STEPS — Sticky scroll with ScrollTrigger pin
   Progress 0→.33 = step1, .33→.66 = step2, .66→1 = step3
────────────────────────────────────────────────── */
(function(){
  const txtPanels = [
    document.getElementById('stp-1'),
    document.getElementById('stp-2'),
    document.getElementById('stp-3')
  ];
  let currentStep = -1;

  function activateStep(n){
    if(n === currentStep) return;
    currentStep = n;
    txtPanels.forEach((p, i) => {
      p.classList.toggle('stp-active', i === n);
    });
  }

  if(window.innerWidth > 767){
    ScrollTrigger.create({
      trigger: '#steps-sticky-wrap',
      start: 'top top',
      end: 'bottom bottom',
      pin: '#steps-sticky-inner',
      pinSpacing: false,        /* ZAROOR false — warna GSAP khud height add karta hai */
      onUpdate(self){
        const p = self.progress;
        if(p < 0.34)      activateStep(0);
        else if(p < 0.67) activateStep(1);
        else               activateStep(2);
      },
      onEnter(){ activateStep(0); },
      onLeaveBack(){ activateStep(0); }
    });
  }

  activateStep(0);
})();

/* ──────────────────────────────────────────────────
   8. TESTIMONIALS SLIDER — Super simple smooth version
────────────────────────────────────────────────── */
(function(){
  const ALL = [
    { name:'Jasmine Lee',     role:'Newcomer Author · Thriller Novel',
      text:'"As I navigated through my creative blocks, I found inspiration in the most unexpected places. It reminded me that storytelling is all about perspective and discovery."' },
    { name:'Daniel Rivera',   role:'Debut Author · Fantasy Novel',
      text:'"The moment I stepped into the world of publishing, I felt an electrifying sense of purpose. My characters began to speak, and the story unfolded in ways I had never imagined."' },
    { name:'Sarah Mitchell',  role:'First-time Author · Romance Novel',
      text:'"Coming across Colaba was a revelation. I had been staring at a blank page for months. Within one afternoon, I had a full outline and knew exactly what my book needed to be."' }
  ];

  let center = 1;
  const cards = document.querySelectorAll('.tcard');

  function idx(offset){
    return ((center + offset) % ALL.length + ALL.length) % ALL.length;
  }

  function fill(card, data){
    card.querySelector('.tcard-uinfo strong').textContent = data.name;
    card.querySelector('.tcard-uinfo span').textContent   = data.role;
    card.querySelector('.tcard-text').textContent         = data.text;
  }

  function render(){
    // Only fill content, don't change positions
    const positions = [idx(-1), idx(0), idx(1)];
    positions.forEach((dataIdx, pos) => {
      fill(cards[pos], ALL[dataIdx]);
      // Don't change classes - positions stay fixed
    });
  }

  function next(){
    // Create smooth card fade timeline - pure fade only, no movement
    const tl = gsap.timeline();
    
    // Fade out entire cards - no Y movement
    tl.to(cards, { 
      opacity: 0, 
      duration: 0.4, 
      ease: 'power2.inOut',
      stagger: 0.05
    })
    // Change content during fade
    .call(() => {
      center = (center + 1) % ALL.length;
      // Update content but don't change card positions/classes
      const positions = [idx(-1), idx(0), idx(1)];
      positions.forEach((dataIdx, pos) => {
        fill(cards[pos], ALL[dataIdx]);
        // Keep original classes - no position changes
      });
    })
    // Fade entire cards back in - no Y movement
    .to(cards, { 
      opacity: 1, 
      duration: 0.5, 
      ease: 'power2.out',
      stagger: 0.08
    });
  }

  // Auto-rotate every 4 seconds
  setInterval(next, 4000);

  // Initial setup - set fixed positions once
  if (cards.length >= 3) {
    cards[0].className = 'tcard tcard-side';  // Left side
    cards[1].className = 'tcard tcard-center'; // Center (always elevated)
    cards[2].className = 'tcard tcard-side';   // Right side
  }
  
  // Initial render
  render();
})();

/* ──────────────────────────────────────────────────
   7. SPEAK SECTION entrance + bar animations
────────────────────────────────────────────────── */
gsap.from('.speak-card', {
  scrollTrigger: { trigger: '.speak-card', start: 'top 80%', once: true },
  opacity: 0, y: 40, scale: 0.97, duration: 0.75, ease: 'power3.out'
});
gsap.from('.speak-h2', {
  scrollTrigger: { trigger: '.speak-sec', start: 'top 80%', once: true },
  opacity: 0, y: 30, duration: 0.6, ease: 'power3.out'
});
gsap.from('.speak-sub', {
  scrollTrigger: { trigger: '.speak-sec', start: 'top 80%', once: true },
  opacity: 0, y: 20, duration: 0.6, delay: 0.1, ease: 'power3.out'
});

// Animate SVG bars continuously
// gsap.to('#bar-1', {
//   y: -8,
//   duration: 0.6,
//   repeat: -1,
//   yoyo: true,
//   ease: 'sine.inOut'
// });
// gsap.to('#bar-2', {
//   y: -12,
//   duration: 0.7,
//   repeat: -1,
//   yoyo: true,
//   ease: 'sine.inOut',
//   delay: 0.1
// });
// gsap.to('#bar-3', {
//   y: -16,
//   duration: 0.5,
//   repeat: -1,
//   yoyo: true,
//   ease: 'sine.inOut',
//   delay: 0.2
// });
// gsap.to('#bar-4', {
//   y: -12,
//   duration: 0.7,
//   repeat: -1,
//   yoyo: true,
//   ease: 'sine.inOut',
//   delay: 0.15
// });
// gsap.to('#bar-5', {
//   y: -8,
//   duration: 0.6,
//   repeat: -1,
//   yoyo: true,
//   ease: 'sine.inOut',
//   delay: 0.05
// });

/* ──────────────────────────────────────────────────
   9. PRICING entrance + animations
────────────────────────────────────────────────── */
gsap.from('.pricing-h2', {
  scrollTrigger: { trigger: '.pricing-sec', start: 'top 80%', once: true },
  opacity: 0, y: 30, duration: 0.65, ease: 'power3.out'
});

// Pricing section animations
ScrollTrigger.create({
  trigger: '.pricing-dark',
  start: 'top 75%',
  once: true,
  onEnter: () => {
    // Animate dark panel
    gsap.from('.pricing-dark', {
      opacity: 0, 
      y: 60, 
      duration: 0.9, 
      ease: 'power3.out'
    });
    
    // Repeating typing animation for price
    const priceText = "$20,000 - $80,000";
    const priceEl = document.getElementById('pc-big-price');
    const strikeEl = document.getElementById('pc-strike');
    
    function startTypingCycle() {
      let priceCharI = 0;
      
      // Reset elements
      priceEl.textContent = "";
      gsap.set(strikeEl, { width: 0, opacity: 0 });
      
      function typePrice() {
        if (priceCharI <= priceText.length) {
          priceEl.textContent = priceText.substring(0, priceCharI);
          priceCharI++;
          setTimeout(typePrice, 60);
        } else {
          // After typing, animate the strike line
          gsap.fromTo(strikeEl, 
            { width: 0, opacity: 0 },
            { 
              width: '100%', 
              opacity: 1, 
              duration: 0.8, 
              ease: 'power2.out', 
              delay: 0.3,
              onComplete: () => {
                // Wait 2 seconds then restart the cycle
                setTimeout(startTypingCycle, 2000);
              }
            }
          );
        }
      }
      
      typePrice();
    }
    
    // Start first cycle after a delay
    setTimeout(startTypingCycle, 800);
    
    // Animate browser image fade up
    gsap.from('.pricing-browser-wrap', {
      scrollTrigger: { 
        trigger: '.pricing-browser-wrap', 
        start: 'top 85%', 
        once: true 
      },
      opacity: 0, 
      y: 80, 
      duration: 1, 
      ease: 'power3.out',
      delay: 0.5
    });
  }
});

/* ──────────────────────────────────────────────────
   10. FOOTER entrance
────────────────────────────────────────────────── */
gsap.from('.footer-cta-copy', {
  scrollTrigger: { trigger: '.footer-cta', start: 'top 80%', once: true },
  opacity: 0, x: -30, duration: 0.7, ease: 'power3.out'
});
gsap.from('.footer-cta-form', {
  scrollTrigger: { trigger: '.footer-cta', start: 'top 80%', once: true },
  opacity: 0, x: 30, duration: 0.7, delay: 0.15, ease: 'power3.out'
});
gsap.from('.footer-wm', {
  scrollTrigger: { trigger: '.footer-wm', start: 'top 90%', once: true },
  opacity: 0, scale: 0.97, duration: 1, ease: 'power2.out'
});

/* ──────────────────────────────────────────────────
   11. HERO BG PARALLAX + Banner zoom
────────────────────────────────────────────────── */
gsap.to('.hero-bg-img', {
  scrollTrigger: { trigger: '.hero-section', start: 'top top', end: 'bottom top', scrub: true },
  y: 80, ease: 'none'
});

// Hero banner zoom animation on scroll
gsap.fromTo('#hero-mockup img',
  { scale: 0.85, opacity: 0.8 },
  {
    scrollTrigger: { 
      trigger: '.hero-section', 
      start: 'top top', 
      end: 'bottom top', 
      scrub: 1 
    },
    scale: 1, 
    opacity: 1, 
    ease: 'power2.out'
  }
);

/* ──────────────────────────────────────────────────
   12. EMAIL FORM – validation + success
────────────────────────────────────────────────── */
function handleEmail($input, $btn) {
  const v = $input.val().trim();
  if (!v || !v.includes('@')) {
    gsap.to($input, { x: [-5,5,-5,5,0], duration: 0.35, ease: 'power2.inOut' });
    return;
  }
  $btn.text('🎉 You\'re on the list!').prop('disabled', true)
    .css({ background: '#29ce42', color: 'white' });
  gsap.from($btn, { scale: 0.85, duration: 0.4, ease: 'back.out(2)' });
}

// hero form
$('.hero-section .btn-orange').on('click', function(){
  handleEmail($(this).closest('.email-pill-box').find('.email-inp'), $(this));
});
$('.hero-section .email-inp').on('keypress', function(e){
  if(e.key==='Enter') handleEmail($(this), $(this).siblings('.btn-orange'));
});

// footer form
$('.footer-sec .btn-orange').on('click', function(){
  handleEmail($(this).closest('.email-pill-box').find('.email-inp'), $(this));
});
$('.footer-sec .email-inp').on('keypress', function(e){
  if(e.key==='Enter') handleEmail($(this), $(this).siblings('.btn-orange'));
});

/* ──────────────────────────────────────────────────
   13. SMOOTH ANCHOR SCROLL
────────────────────────────────────────────────── */
$('a[href^="#"]').on('click', function(e){
  const $t = $(this.getAttribute('href'));
  if($t.length){ e.preventDefault(); $('html,body').animate({ scrollTop: $t.offset().top - 76 }, 600); }
});

/* ──────────────────────────────────────────────────
   14. SPEAK SECTION – waveform pulse on hover
────────────────────────────────────────────────── */
$('.speak-card').on('mouseenter', function(){
  gsap.to('.speak-voice-img', { scale: 1.08, duration: 0.3, ease: 'power2.out' });
}).on('mouseleave', function(){
  gsap.to('.speak-voice-img', { scale: 1, duration: 0.3, ease: 'power2.out' });
});

/* Cursor pulse */
$('.speak-card').on('click', function(){
  gsap.timeline()
    .to('.speak-voice-img', { scale: 1.15, duration: 0.2, ease: 'power2.out' })
    .to('.speak-voice-img', { scale: 1, duration: 0.4, ease: 'elastic.out(1,.5)' });
});

(function() {
    window.addEventListener('DOMContentLoaded', function() {
      gsap.registerPlugin(ScrollTrigger);

      // 🔽 YAHAN WO SECTION KA SELECTOR DAALO JIS PAR PHLE SE ANIMATION HAI 🔽
      const excludeSelector = '.steps-sec, #how-it-works, #hero';   // Exclude hero section to prevent text-cta jitter

      // Saare sections aur .col-md-6 except excludeSelector wale
      const allSections = Array.from(document.querySelectorAll('section'));
      const colMd6 = Array.from(document.querySelectorAll('.col-md-6'));
      const footer = document.querySelector('footer');
      
      let elements = [...allSections, ...colMd6];
      if (footer) elements.push(footer);

      // Filter out excluded sections
      if (excludeSelector) {
        const excludedElements = document.querySelectorAll(excludeSelector);
        elements = elements.filter(el => !excludedElements.contains(el));
      }

      // Filter out elements that contain .text-cta (they have their own typing animation)
      elements = elements.filter(el => !el.querySelector('.text-cta'));

      if (!elements.length) return;

      function getDirectionX(index) {
        return (index % 2 === 0) ? -70 : 70;
      }

      // Initially set hidden state
      elements.forEach((el, idx) => {
        const xVal = getDirectionX(idx);
        gsap.set(el, { opacity: 0, x: xVal });
      });

      const timelines = [];
      elements.forEach((el, idx) => {
        const xVal = getDirectionX(idx);
        const tl = gsap.timeline({ paused: true });
        tl.to(el, { opacity: 1, x: 0, duration: 0.8, ease: "power2.out" });
        
        ScrollTrigger.create({
          trigger: el,
          start: "top 85%",
          end: "bottom 15%",
          toggleActions: "restart none restart none",
          animation: tl,
        });
        timelines.push({ el, tl });
      });

      // Elements already in viewport should not stay hidden
      function animateVisibleNow() {
        timelines.forEach(({ el, tl }) => {
          const rect = el.getBoundingClientRect();
          const winHeight = window.innerHeight;
          if (rect.top < winHeight && rect.bottom > 0) {
            tl.progress(1);
          } else {
            tl.progress(0);
          }
        });
      }

      setTimeout(animateVisibleNow, 50);
      window.addEventListener('resize', () => setTimeout(animateVisibleNow, 100));
      ScrollTrigger.refresh();
    });
  })();

 


  (function() {
    // ------------------------------------------------------------------
    // PROFESSIONAL SOUND-LIKE ANIMATION (smooth, organic & continuous)
    // Instead of simple translation, we apply scaleY from exact bottom anchor
    // This mimics real sound bars that expand upward from a fixed baseline.
    // Each bar stays rooted at its bottom coordinate and "breathes" / pulses
    // like an audio visualizer. Delays & durations create a wave effect.
    // ------------------------------------------------------------------
    
    // Define bottom Y coordinates for each bar (derived from original path 'd' attribute)
    // bar-1: M18.666 47.8355 V80.2514 => bottom Y = 80.2514
    // bar-2: bottom Y = 90.9841
    // bar-3: bottom Y = 101.786
    // bar-4: bottom Y = 90.9841
    // bar-5: bottom Y = 80.2514
    // X coordinates: used to set precise transformOrigin (bottom center anchor)
    // Anchor format: `${x}px ${bottomY}px` ensures scaling happens from bottom of each bar.
    
    const barsData = [
      { id: "#bar-1", x: 18.666, bottomY: 80.2514, scalePeak: 1.18, duration: 0.62, delay: 0.0, ease: "sine.inOut" },
      { id: "#bar-2", x: 41.334, bottomY: 90.9841, scalePeak: 1.24, duration: 0.7,  delay: 0.1, ease: "sine.inOut" },
      { id: "#bar-3", x: 64.0039, bottomY: 101.786, scalePeak: 1.16, duration: 0.68, delay: 0.2, ease: "sine.inOut" },
      { id: "#bar-4", x: 86.6719, bottomY: 90.9841, scalePeak: 1.23, duration: 0.66, delay: 0.15, ease: "sine.inOut" },
      { id: "#bar-5", x: 109.34, bottomY: 80.2514, scalePeak: 1.18, duration: 0.6,  delay: 0.05, ease: "sine.inOut" }
    ];
    
    // Additional micro-tuning: for smoother feel, we choose peak scales that aren't extreme
    // but produce a clear 'pumping' sound-like rhythm. Values between 1.15~1.26 create
    // noticeable yet elegant motion — "thori choti" movement but very expressive.
    // Slightly lower amplitude than an aggressive visualizer, perfect for smooth UI.
    
    // Make sure GSAP is ready
    if (typeof gsap !== "undefined") {
      
      // Ensure any existing animations are cleared (clean start)
      barsData.forEach(bar => {
        const element = document.querySelector(bar.id);
        if (element) {
          // Kill previous tweens to avoid conflicts (fresh state)
          gsap.killTweensOf(element);
          // reset transform to identity (no scale initially)
          gsap.set(element, { scaleY: 1, transformOrigin: `${bar.x}px ${bar.bottomY}px` });
        }
      });
      
      // Create the organic continuous animation for each bar
      // Instead of yoyo on translation, we use scaleY — each bar gracefully expands from bottom
      // and contracts, exactly like sound meter but with elegant sine easing.
      // We use .to() with yoyo:true and repeat:-1, which makes animation seamless.
      // Start from scaleY = 1 (resting full height) -> up to scalePeak -> back to 1 -> loop.
      // This gives a smooth "bass kick" feel, adjustable per bar.
      
      barsData.forEach((bar) => {
        const elem = document.querySelector(bar.id);
        if (!elem) return;
        
        // Create a seamless infinite animation with proper easing & organic delays.
        // The result: sound-wave style where bars rise one after another creating a ripple.
        gsap.to(elem, {
          scaleY: bar.scalePeak,           // upward extension from bottom anchor
          duration: bar.duration,
          repeat: -1,                      // infinite loop
          yoyo: true,                      // goes up then back down gracefully
          ease: bar.ease,
          delay: bar.delay,
          overwrite: true,
          // Optional: add a subtle onUpdate for extra smoothness? not needed
        });
      });
      
      // Additional micro-tuning: for bars that are shorter (bar-1 & bar-5) we used peak 1.18
      // This creates a coherent "sound wave" group.
      // Because transformOrigin is set per-element, the bars will never visually detach from ground
      // and the visual rhythm feels like an audio spectrum analyzer — smooth, responsive and "soun wali feel".
      
      // For extra liveliness, we also add a very faint floating effect to the whole SVG (optional)
      // but not intrusive — can be omitted. Instead, we ensure high performance.
      
      // Edge case: If someone wants even smoother motion, we could add a short stagger on first load,
      // but infinite yoyo with delays already creates beautiful staggered undulation.
      
      // Bonus: small dynamic adjustment to make animation slightly more "musical"
      // We set a tiny random variance for repeat refresh? Not needed, sine wave is perfect.
      
      // Additional enhancement: the bars also respond to hover (just for fun) - no requirement,
      // but increases modern UX. (Doesn't break continuous animation)
      const svgElement = document.querySelector('svg');
      if (svgElement) {
        svgElement.addEventListener('mouseenter', () => {
          // Subtle speed-up effect on hover - playful, but not required (won't affect main loop)
          barsData.forEach(bar => {
            const tween = gsap.getTweensOf(document.querySelector(bar.id));
            if (tween.length) {
              tween[0].timeScale(1.3);
            }
          });
        });
        svgElement.addEventListener('mouseleave', () => {
          barsData.forEach(bar => {
            const tween = gsap.getTweensOf(document.querySelector(bar.id));
            if (tween.length) {
              tween[0].timeScale(1);
            }
          });
        });
      }
      
      // Optional Console reassurance: animation running flawlessly
      console.log("🎵 Sound wave animation is live — smooth vertical expansion from fixed baseline, compact & pleasing.");
      
    } else {
      console.warn("GSAP not loaded — animation will not run.");
    }
  })();
