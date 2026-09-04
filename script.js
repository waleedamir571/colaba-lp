(() => {
  const root = document.documentElement;
  const themeButton = document.querySelector('.theme-toggle');
  const label = themeButton.querySelector('.theme-label');
  const icon = themeButton.querySelector('.theme-icon');
  // Every page load starts in the dark Figma state.
  const preferred = 'dark';

  function setTheme(theme) {
    root.dataset.theme = theme;
    const dark = theme === 'dark';
    themeButton.setAttribute('aria-pressed', String(dark));
    themeButton.setAttribute('aria-label', `Switch to ${dark ? 'light' : 'dark'} mode`);
    label.textContent = dark ? 'Light' : 'Dark';
    icon.textContent = dark ? '\u2600' : '\u263E';
  }
  setTheme(preferred);
  themeButton.addEventListener('click', () => setTheme(root.dataset.theme === 'dark' ? 'light' : 'dark'));

  const typingTarget = document.querySelector('[data-typewriter]');
  if (typingTarget) {
    const fullText = typingTarget.dataset.typewriter;
    const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!reduceMotion) {
      typingTarget.setAttribute('aria-label', fullText);
      typingTarget.textContent = '';
      typingTarget.classList.add('typewriter-stable', 'is-typing');
      const visual = document.createElement('span');
      visual.className = 'yellow-type-visual';
      visual.setAttribute('aria-hidden', 'true');
      fullText.split(/(\s+)/).forEach((part) => {
        if (!part) return;
        if (/^\s+$/.test(part)) {
          visual.appendChild(document.createTextNode(part));
          return;
        }
        const word = document.createElement('span');
        word.className = 'yellow-type-word';
        Array.from(part).forEach((letter) => {
          const character = document.createElement('span');
          character.className = 'yellow-type-char';
          character.textContent = letter;
          word.appendChild(character);
        });
        visual.appendChild(word);
      });
      typingTarget.appendChild(visual);
      const characters = Array.from(typingTarget.querySelectorAll('.yellow-type-char'));
      let index = 0;
      const type = () => {
        if (characters[index]) characters[index].classList.add('is-visible');
        index += 1;
        if (index < characters.length) {
          setTimeout(type, 110);
        } else {
          typingTarget.classList.remove('is-typing');
          typingTarget.classList.add('is-typed');
        }
      };
      setTimeout(type, 650);
    }
  }

  /* Gold heading phrases reveal once when their section first enters view.
     The text remains in normal layout, so the effect cannot move surrounding content. */
  const goldHeadings = document.querySelectorAll(
    'h1 .highlight:not([data-typewriter]), h2 .highlight, h3 .highlight'
  );
  if (goldHeadings.length) {
    const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
    const prepareGoldHeading = (heading) => {
      if (heading.dataset.typePrepared === 'true') return;
      const fullText = heading.textContent;
      heading.dataset.typePrepared = 'true';
      heading.dataset.fullText = fullText;
      heading.setAttribute('aria-label', fullText);
      heading.textContent = '';
      const visual = document.createElement('span');
      visual.className = 'yellow-type-visual';
      visual.setAttribute('aria-hidden', 'true');
      fullText.split(/(\s+)/).forEach((part) => {
        if (!part) return;
        if (/^\s+$/.test(part)) {
          visual.appendChild(document.createTextNode(part));
          return;
        }
        const word = document.createElement('span');
        word.className = 'yellow-type-word';
        Array.from(part).forEach((letter) => {
          const character = document.createElement('span');
          character.className = 'yellow-type-char';
          character.textContent = letter;
          word.appendChild(character);
        });
        visual.appendChild(word);
      });
      heading.appendChild(visual);
    };
    const typeGoldHeading = (heading) => {
      if (heading.dataset.typed === 'true') return;
      heading.dataset.typed = 'true';
      heading.classList.remove('yellow-type-ready');
      heading.classList.add('yellow-type-once', 'is-typing');
      const characters = Array.from(heading.querySelectorAll('.yellow-type-char'));
      let character = 0;
      const tick = () => {
        if (characters[character]) characters[character].classList.add('is-visible');
        character += 1;
        if (character < characters.length) {
          setTimeout(tick, 70);
        } else {
          heading.classList.remove('is-typing');
          heading.classList.add('is-typed');
        }
      };
      tick();
    };
    goldHeadings.forEach((heading) => {
      prepareGoldHeading(heading);
      heading.classList.add('yellow-type-ready');
    });
    if (reduceMotion) {
      goldHeadings.forEach((heading) => {
        heading.classList.remove('yellow-type-ready');
        heading.classList.add('is-typed');
        heading.querySelectorAll('.yellow-type-char').forEach((character) => {
          character.classList.add('is-visible');
        });
      });
    } else {
      const typeObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          typeGoldHeading(entry.target);
          observer.unobserve(entry.target);
        });
      }, {threshold: .25, rootMargin: '0px 0px -10% 0px'});
      goldHeadings.forEach((heading) => typeObserver.observe(heading));
    }
  }

  const menuButton = document.querySelector('.menu-toggle');
  const mobileNav = document.querySelector('.mobile-nav');
  menuButton.addEventListener('click', () => {
    const open = mobileNav.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(open));
  });
  mobileNav.addEventListener('click', () => {
    mobileNav.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
  });

  const track = document.querySelector('.slider-track');
  if (track) {
    const originals = Array.from(track.querySelectorAll('.book'));
    originals.forEach((book) => {
      const duplicate = book.cloneNode(true);
      duplicate.setAttribute('aria-hidden', 'true');
      track.appendChild(duplicate);
    });
    track.classList.add('is-auto-sliding');
  }

  /* Reveal each visual block from the side where it is actually positioned. */
  const motionItems = document.querySelectorAll(
    '.two-col > *, .step-card > *, .job-grid > *, .audio-grid > *, ' +
    '.compare-grid > article, .language-cards > *, .testimonial-grid > *, ' +
    '.case-grid > *, .tool-grid > *, .faq-grid > *, .risk-card > *'
  );
  if (motionItems.length) {
    const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
    motionItems.forEach((item) => {
      const itemBox = item.getBoundingClientRect();
      const section = item.closest('section');
      const sectionBox = section ? section.getBoundingClientRect() : {left: 0, width: innerWidth};
      const itemCenter = itemBox.left + itemBox.width / 2;
      const sectionCenter = sectionBox.left + sectionBox.width / 2;
      const tolerance = Math.min(80, sectionBox.width * .06);
      const direction = itemCenter < sectionCenter - tolerance
        ? 'left'
        : itemCenter > sectionCenter + tolerance
          ? 'right'
          : 'center';
      item.classList.add('content-motion', `content-motion-${direction}`);
    });

    if (reduceMotion || !('IntersectionObserver' in window)) {
      motionItems.forEach((item) => item.classList.add('content-motion-visible'));
    } else {
      const contentObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('content-motion-visible');
          observer.unobserve(entry.target);
        });
      }, {
        threshold: .08,
        rootMargin: '0px 0px -6% 0px'
      });
      motionItems.forEach((item) => contentObserver.observe(item));
    }
  }

  function wave(canvas, footer = false) {
    const ctx = canvas.getContext('2d');
    let width, height, frame = 0, running = false, raf = 0, lastPaint = 0;
    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(devicePixelRatio || 1, 2);
      width = rect.width; height = rect.height;
      canvas.width = width * dpr; canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    addEventListener('resize', resize, {passive:true});
    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
    function draw(timestamp = 0) {
      if (!running && !reduce) return;
      if (!reduce && timestamp - lastPaint < 33) {
        raf = requestAnimationFrame(draw);
        return;
      }
      lastPaint = timestamp;
      ctx.clearRect(0, 0, width, height);
      const dark = root.dataset.theme === 'dark';
      const rows = footer ? 24 : 38;
      const base = footer ? height * .32 : height * .02;
      const time = frame * .012;
      ctx.lineWidth = dark ? 1.1 : .9;
      ctx.strokeStyle = dark ? 'rgba(255,255,255,.095)' : 'rgba(45,52,54,.12)';
      for (let row = 0; row < rows; row++) {
        const depth = row / Math.max(1, rows - 1);
        ctx.beginPath();
        for (let x = -20; x <= width + 20; x += 8) {
          const nx = x / Math.max(width, 1);
          const perspective = Math.pow(depth, 1.7) * height * .62;
          const ridge =
            Math.sin(nx * 7.4 + row * .16 + time) * (12 + depth * 36) +
            Math.sin(nx * 19 - row * .09 - time * .7) * (3 + depth * 9);
          const valley = Math.exp(-Math.pow((nx - .5) * 3.2, 2)) * depth * height * .13;
          const y = base + row * (footer ? 9 : 6.7) + perspective + ridge - valley;
          if (x === -20) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
      }
      if (!reduce) { frame++; raf = requestAnimationFrame(draw); }
    }
    if (reduce) {
      running = true;
      draw();
      return;
    }
    const visibilityObserver = new IntersectionObserver(entries => {
      const visible = entries[0].isIntersecting;
      if (visible === running) return;
      running = visible;
      if (running) raf = requestAnimationFrame(draw);
      else cancelAnimationFrame(raf);
    }, {rootMargin: '150px'});
    visibilityObserver.observe(canvas);
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        running = false;
        cancelAnimationFrame(raf);
      }
    });
  }
  wave(document.querySelector('#wave-canvas'));
  wave(document.querySelector('#footer-wave'), true);
})();
