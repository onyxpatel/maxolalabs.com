(function() {
  'use strict';

  // Preloader
  window.addEventListener('load', function() {
    var pre = document.querySelector('.preloader');
    if (pre) {
      pre.style.opacity = '0';
      pre.style.transition = 'opacity 0.6s ease';
      setTimeout(function() { pre.style.display = 'none'; }, 600);
    }
    if (typeof WOW !== 'undefined') { new WOW({ offset: 60, mobile: false }).init(); }
  });

  // Sticky header
  var header = document.getElementById('header');
  window.addEventListener('scroll', function() {
    if (header) {
      header.classList.toggle('sticky', window.scrollY > 60);
    }
    var st = document.getElementById('scrollTop');
    if (st) st.classList.toggle('active', window.scrollY > 300);
  });

  // Scroll to top
  var scrollTop = document.getElementById('scrollTop');
  if (scrollTop) {
    scrollTop.addEventListener('click', function(e) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Smooth scroll
  document.querySelectorAll('.page-scroll').forEach(function(link) {
    link.addEventListener('click', function(e) {
      var href = this.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        var target = document.querySelector(href);
        if (target) {
          var offset = target.getBoundingClientRect().top + window.scrollY - 80;
          window.scrollTo({ top: offset, behavior: 'smooth' });
        }
        // Close mobile menu
        var nav = document.getElementById('navbarNav');
        var btn = document.querySelector('.mobile-menu-btn');
        if (nav) nav.classList.remove('mobile-open');
        if (btn) btn.classList.remove('active');
      }
    });
  });

  // Mobile menu
  var mobileBtn = document.querySelector('.mobile-menu-btn');
  var navbarNav = document.getElementById('navbarNav');
  if (mobileBtn && navbarNav) {
    mobileBtn.addEventListener('click', function() {
      this.classList.toggle('active');
      navbarNav.classList.toggle('mobile-open');
    });
  }

})();
