// Smooth scroll, fade-in & mobile nav toggle
(function () {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.nav-links');

  if (toggle) {
    toggle.addEventListener('click', () => {
      nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
    });
  }

  // Parallax scroll
  const back = document.querySelector('.parallax.back');
  const mid = document.querySelector('.parallax.mid');
  window.addEventListener('scroll', () => {
    const sc = window.scrollY;
    if (back) back.style.transform = `translateY(${sc * 0.03}px)`;
    if (mid) mid.style.transform = `translateY(${sc * 0.06}px)`;
  });

  // Fade-up animation
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
      });
    },
    { threshold: 0.2 }
  );

  document.querySelectorAll('.fade-up').forEach((el) => observer.observe(el));

  // Smooth anchor scroll
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener('click', (ev) => {
      const href = a.getAttribute('href');
      if (href.startsWith('#')) {
        ev.preventDefault();
        document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
})();
