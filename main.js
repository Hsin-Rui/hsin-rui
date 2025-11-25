import './style.css'
import { initRouter } from './src/router.js';

document.addEventListener('DOMContentLoaded', () => {
  initRouter();
});

const observer = new MutationObserver(() => {
  const animatedElements = document.querySelectorAll('.cv-item, .publication-item, .project-card, .about-photo, .about-text');
  animatedElements.forEach(el => {
    if (!el.hasAttribute('data-animated')) {
      el.setAttribute('data-animated', 'true');
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';

      const observerOptions = {
        root: null,
        rootMargin: '-100px',
        threshold: 0.1
      };

      const intersectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
          }
        });
      }, observerOptions);

      intersectionObserver.observe(el);
    }
  });
});

observer.observe(document.getElementById('app'), { childList: true, subtree: true });
