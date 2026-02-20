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

  // Countdown Timer — target: Feb 23, 2026 9:00 AM ET
  var launchDate = new Date('2026-02-23T09:00:00-05:00');

  function pad(n) { return String(n).padStart(2, '0'); }

  function updateCountdown() {
    var now = new Date();
    var diff = launchDate - now;

    var cdDays  = document.getElementById('cd-days');
    var cdHours = document.getElementById('cd-hours');
    var cdMins  = document.getElementById('cd-mins');
    var cdSecs  = document.getElementById('cd-secs');

    if (!cdDays) return;

    if (diff <= 0) {
      cdDays.textContent  = '00';
      cdHours.textContent = '00';
      cdMins.textContent  = '00';
      cdSecs.textContent  = '00';
      return;
    }

    var days  = Math.floor(diff / (1000 * 60 * 60 * 24));
    var hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var mins  = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    var secs  = Math.floor((diff % (1000 * 60)) / 1000);

    cdDays.textContent  = pad(days);
    cdHours.textContent = pad(hours);
    cdMins.textContent  = pad(mins);
    cdSecs.textContent  = pad(secs);
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);

})();
