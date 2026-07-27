(() => {
  const root = document.documentElement;
  const themeButton = document.querySelector('.theme-toggle');
  const label = themeButton.querySelector('.theme-label');
  const icon = themeButton.querySelector('.theme-icon');
  const preferred = localStorage.getItem('colaba-theme') ||
    (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

  function setTheme(theme) {
    root.dataset.theme = theme;
    const dark = theme === 'dark';
    themeButton.setAttribute('aria-pressed', String(dark));
    themeButton.setAttribute('aria-label', `Switch to ${dark ? 'light' : 'dark'} mode`);
    label.textContent = dark ? 'Light' : 'Dark';
    icon.textContent = dark ? '☀' : '☾';
    localStorage.setItem('colaba-theme', theme);
  }
  setTheme(preferred);
  themeButton.addEventListener('click', () => setTheme(root.dataset.theme === 'dark' ? 'light' : 'dark'));

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

  const typeTarget = document.querySelector('[data-typewriter]');
  if (!matchMedia('(prefers-reduced-motion: reduce)').matches && typeTarget) {
    const text = typeTarget.dataset.typewriter;
    typeTarget.textContent = '';
    let index = 0;
    const type = () => {
      typeTarget.textContent = text.slice(0, ++index);
      if (index < text.length) setTimeout(type, 78);
    };
    setTimeout(type, 550);
  }

  const track = document.querySelector('.slider-track');
  document.querySelector('.slider-btn.prev').addEventListener('click', () => track.scrollBy({left: -track.clientWidth * .75, behavior: 'smooth'}));
  document.querySelector('.slider-btn.next').addEventListener('click', () => track.scrollBy({left: track.clientWidth * .75, behavior: 'smooth'}));

  // Directional entrances follow the alternating composition in the Figma.
  if (!matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const revealGroups = [
      ['.problem .two-col > :first-child, .audio .two-col > :first-child, .case-study .two-col > :first-child', 'reveal-left'],
      ['.problem .two-col > :last-child, .audio .two-col > :last-child, .case-study .two-col > :last-child', 'reveal-right'],
      ['.step-card:nth-of-type(1), .step-card:nth-of-type(3)', 'reveal-left'],
      ['.step-card:nth-of-type(2)', 'reveal-right'],
      ['.section > .eyebrow, .section > h2, .section > p:not(.eyebrow)', 'reveal-up'],
      ['.pipeline-card, .promise, .tools-cta', 'reveal-scale'],
      ['.book, .method, .roles p, .three-cards article, .testimonial-grid blockquote, .tool-grid article, .accordion details', 'reveal-up']
    ];
    const revealItems = [];
    revealGroups.forEach(([selector, direction]) => {
      document.querySelectorAll(selector).forEach((element, index) => {
        if (element.classList.contains('reveal-ready')) return;
        element.classList.add('reveal-ready', direction);
        if (index % 3) element.classList.add(`reveal-delay-${index % 3}`);
        revealItems.push(element);
      });
    });
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    }, {threshold: .12, rootMargin: '0px 0px -7% 0px'});
    revealItems.forEach(element => revealObserver.observe(element));
  }

  function wave(canvas, footer = false) {
    const ctx = canvas.getContext('2d');
    let width, height, frame = 0;
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
    function draw() {
      ctx.clearRect(0, 0, width, height);
      const dark = root.dataset.theme === 'dark';
      ctx.fillStyle = dark ? 'rgba(255,255,255,.16)' : 'rgba(32,38,40,.19)';
      const base = footer ? height * .68 : height * .43;
      const cols = Math.ceil(width / 15);
      const rows = footer ? 23 : 36;
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const x = c * 15;
          const depth = r / rows;
          const phase = c * .19 + r * .21 + frame * .018;
          const y = base + r * (footer ? 11 : 16) + Math.sin(phase) * (8 + depth * 25) + Math.sin(c * .07 + frame * .012) * 22;
          const radius = .7 + depth * .75;
          ctx.beginPath(); ctx.arc(x, y, radius, 0, Math.PI * 2); ctx.fill();
        }
      }
      if (!reduce) { frame++; requestAnimationFrame(draw); }
    }
    draw();
  }
  wave(document.querySelector('#wave-canvas'));
  wave(document.querySelector('#footer-wave'), true);
})();
