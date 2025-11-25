import { renderHome } from './pages/home.js';
import { renderCV } from './pages/cv.js';
import { renderPublications } from './pages/publications.js';
import { renderProjects } from './pages/projects.js';

const routes = {
  '/': renderHome,
  '/cv': renderCV,
  '/publications': renderPublications,
  '/projects': renderProjects
};

export function navigate(path) {
  const route = routes[path] || routes['/'];
  const app = document.getElementById('app');
  app.innerHTML = route();
  updateActiveNavLink(path);
  window.scrollTo(0, 0);
}

function updateActiveNavLink(path) {
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === path) {
      link.classList.add('active');
    }
  });
}

export function initRouter() {
  const navLinks = document.querySelectorAll('.nav-link');

  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const path = link.getAttribute('href');
      window.history.pushState({ path }, '', path);
      navigate(path);
    });
  });

  window.addEventListener('popstate', (e) => {
    const path = e.state?.path || '/';
    navigate(path);
  });

  const currentPath = window.location.pathname || '/';
  navigate(currentPath);
}
