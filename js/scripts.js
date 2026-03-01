/*!
 * Dr. Lucas Silva – Theme Scripts v2.0
 * Scroll animations · Navbar · Panel switching
 */

;(function () {
  'use strict';

  /* ── 1. NAVBAR SHRINK (debounced) ─────────────────────────── */
  const nav = document.getElementById('mainNav');
  let ticking = false;

  function updateNavbar() {
    if (!nav) return;
    nav.classList.toggle('navbar-shrink', window.scrollY > 20);
    ticking = false;
  }

  window.addEventListener('scroll', function () {
    if (!ticking) {
      requestAnimationFrame(updateNavbar);
      ticking = true;
    }
  }, { passive: true });

  updateNavbar();

  /* ── 2. BOOTSTRAP SCROLLSPY ───────────────────────────────── */
  if (nav && typeof bootstrap !== 'undefined' && bootstrap.ScrollSpy) {
    new bootstrap.ScrollSpy(document.body, {
      target: '#mainNav',
      rootMargin: '0px 0px -40%',
    });
  }

  /* ── 3. COLLAPSE NAVBAR ON LINK CLICK (mobile) ────────────── */
  const toggler = document.querySelector('.navbar-toggler');
  if (toggler) {
    document.querySelectorAll('#navbarResponsive .nav-link').forEach(function (link) {
      link.addEventListener('click', function () {
        if (getComputedStyle(toggler).display !== 'none') toggler.click();
      });
    });
  }

  /* ── 4. SCROLL-REVEAL (IntersectionObserver) ──────────────── */
  function initReveal() {
    var elements = document.querySelectorAll('.reveal');
    if (!elements.length) return;

    if (!('IntersectionObserver' in window)) {
      // fallback: show everything
      elements.forEach(function (el) { el.classList.add('revealed'); });
      return;
    }

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    elements.forEach(function (el) { observer.observe(el); });
  }

  /* ── 5. PANEL SWITCHING (exam & article pages) ────────────── */
  function initPanels(panelSelector, linkSelector, dataAttr) {
    var panels = Array.from(document.querySelectorAll(panelSelector));
    var links  = Array.from(document.querySelectorAll(linkSelector));
    if (!panels.length) return;

    function showPanel(key) {
      var target = (key && panels.some(function (p) { return p.dataset.panel === key; })) ? key : 'home';

      panels.forEach(function (p) {
        var isTarget = p.dataset.panel === target;
        p.classList.toggle('d-none', !isTarget);
        // re-trigger reveals inside the newly-shown panel
        if (isTarget) {
          p.querySelectorAll('.reveal:not(.revealed)').forEach(function (el) {
            el.classList.add('revealed');
          });
        }
      });

      links.forEach(function (a) {
        var isActive = a.getAttribute('data-' + dataAttr) === target;
        a.classList.toggle('active', isActive);
        a.setAttribute('aria-current', isActive ? 'true' : 'false');
      });

      // scroll to top of content area
      var contentArea = panels[0] && panels[0].parentElement;
      if (contentArea && key) contentArea.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    links.forEach(function (a) {
      a.addEventListener('click', function (e) {
        e.preventDefault();
        var key = a.getAttribute('data-' + dataAttr);
        history.replaceState(null, '', '#' + key);
        showPanel(key);
      });
    });

    var initial = (location.hash || '').replace('#', '');
    showPanel(initial);

    window.addEventListener('hashchange', function () {
      showPanel((location.hash || '').replace('#', ''));
    });
  }

  /* ── 6. DYNAMIC FOOTER ────────────────────────────────────── */
  function initFooter() {
    var yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    var dateEl = document.getElementById('update-date');
    if (dateEl) {
      var start = new Date('2026-02-21');
      var today = new Date();
      var diff  = Math.floor((today - start) / 864e5);
      var weeks = diff > 0 ? Math.floor(diff / 7) : 0;
      var date  = new Date(start);
      date.setDate(start.getDate() + weeks * 7);
      dateEl.textContent = date.toLocaleDateString('pt-BR', {
        day: '2-digit', month: '2-digit', year: '2-digit'
      });
    }
  }

  /* ── INIT ON DOMContentLoaded ─────────────────────────────── */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }

  function boot() {
    initReveal();
    initFooter();
    initPanels('.exam-panel',    '.exam-link',    'exam');
    initPanels('.article-panel', '.article-link', 'article');
  }
})();
