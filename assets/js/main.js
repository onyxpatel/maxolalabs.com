/*
  WatchTower - Maxola Labs LLC
  main.js
*/

(function () {

  // Preloader
  window.addEventListener('load', function () {
    var preloader = document.querySelector('.preloader');
    if (preloader) {
      preloader.style.opacity = '0';
      setTimeout(function () { preloader.style.display = 'none'; }, 500);
    }
  });

  // Sticky Header + Scroll-to-Top visibility
  window.addEventListener('scroll', function () {
    var header = document.querySelector('.navbar-area');
    var scrollTopBtn = document.querySelector('.scroll-top');

    if (header) {
      header.classList.toggle('sticky', window.pageYOffset > 50);
    }
    if (scrollTopBtn) {
      scrollTopBtn.classList.toggle('active', window.pageYOffset > 300);
    }
  });

  // Active nav link highlight on scroll
  window.addEventListener('scroll', function () {
    var sections = document.querySelectorAll('.page-scroll');
    var scrollPos = (window.pageYOffset || document.documentElement.scrollTop) + 73;

    sections.forEach(function (link) {
      var val = link.getAttribute('href');
      if (!val || !val.startsWith('#')) return;
      var el = document.querySelector(val);
      if (!el) return;
      if (el.offsetTop <= scrollPos && el.offsetTop + el.offsetHeight > scrollPos) {
        sections.forEach(function (s) { s.classList.remove('active'); });
        link.classList.add('active');
      }
    });
  });

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // Mobile menu toggle
  var mobileBtn = document.querySelector('.mobile-menu-btn');
  var navMenu = document.querySelector('.navbar-nav');

  if (mobileBtn && navMenu) {
    mobileBtn.addEventListener('click', function () {
      mobileBtn.classList.toggle('active');
      navMenu.classList.toggle('mobile-open');
    });

    navMenu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        mobileBtn.classList.remove('active');
        navMenu.classList.remove('mobile-open');
      });
    });
  }

  // Initialize WOW.js
  if (typeof WOW !== 'undefined') {
    new WOW().init();
  }

})();
