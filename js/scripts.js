/*!
* Start Bootstrap - Grayscale v7.0.6 (https://startbootstrap.com/theme/grayscale)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-grayscale/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});
window.addEventListener("DOMContentLoaded", () => {
  const panels = Array.from(document.querySelectorAll(".exam-panel"));
  const links = Array.from(document.querySelectorAll(".exam-link"));

  function showPanel(key) {
    const target = key && panels.find(p => p.dataset.panel === key) ? key : "home";

    panels.forEach(p => p.classList.toggle("d-none", p.dataset.panel !== target));

    // (opcional) marcar link ativo
    links.forEach(a => {
      const isActive = a.dataset.exam === target;
      a.classList.toggle("active", isActive);
      a.setAttribute("aria-current", isActive ? "true" : "false");
    });
  }

  // Clique nos links
  links.forEach(a => {
    a.addEventListener("click", (e) => {
      e.preventDefault();
      const key = a.dataset.exam;
      history.replaceState(null, "", `#${key}`);
      showPanel(key);
    });
  });

  // Carregar direto via hash
  const initial = (location.hash || "").replace("#", "");
  showPanel(initial);

  // Se o usuário mudar hash manualmente
  window.addEventListener("hashchange", () => {
    const key = (location.hash || "").replace("#", "");
    showPanel(key);
  });
});