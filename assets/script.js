// Nestly Blog — shared interactivity
document.addEventListener('DOMContentLoaded', function () {

  /* Mobile nav toggle */
  var burger = document.querySelector('.burger');
  var navLinks = document.querySelector('.nav-links');
  if (burger && navLinks) {
    burger.addEventListener('click', function () {
      navLinks.classList.toggle('open');
      burger.textContent = navLinks.classList.contains('open') ? '✕' : '☰';
    });
    navLinks.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        navLinks.classList.remove('open');
        burger.textContent = '☰';
      });
    });
  }

  /* Scroll-reveal for cards / reveal elements */
  var revealEls = document.querySelectorAll('.reveal, .card');
  if ('IntersectionObserver' in window && revealEls.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    revealEls.forEach(function (el, i) {
      el.style.transitionDelay = (Math.min(i % 6, 6) * 60) + 'ms';
      io.observe(el);
    });
  } else {
    revealEls.forEach(function (el) { el.classList.add('in-view'); });
  }

  /* Animated stat counters */
  var counters = document.querySelectorAll('[data-count]');
  if (counters.length) {
    var animate = function (el) {
      var target = parseFloat(el.getAttribute('data-count'));
      var suffixEl = el.querySelector('.suffix');
      var decimals = el.getAttribute('data-decimals') ? parseInt(el.getAttribute('data-decimals'), 10) : 0;
      var dur = 1400, start = null;
      var numNode = document.createTextNode('0');
      el.insertBefore(numNode, suffixEl || null);
      function step(ts) {
        if (!start) start = ts;
        var p = Math.min((ts - start) / dur, 1);
        var eased = 1 - Math.pow(1 - p, 3);
        var val = target * eased;
        numNode.textContent = decimals ? val.toFixed(decimals) : Math.round(val).toLocaleString('lt-LT');
        if (p < 1) requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
    };
    if ('IntersectionObserver' in window) {
      var cio = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) { animate(entry.target); cio.unobserve(entry.target); }
        });
      }, { threshold: 0.4 });
      counters.forEach(function (c) { cio.observe(c); });
    } else {
      counters.forEach(animate);
    }
  }

  /* Reading progress bar */
  var bar = document.querySelector('.progress-bar');
  if (bar) {
    var onScroll = function () {
      var h = document.documentElement;
      var scrollable = h.scrollHeight - h.clientHeight;
      var pct = scrollable > 0 ? (h.scrollTop / scrollable) * 100 : 0;
      bar.style.width = pct + '%';
    };
    document.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* TOC scroll-spy */
  var tocLinks = document.querySelectorAll('.toc a');
  if (tocLinks.length) {
    var headings = Array.prototype.map.call(tocLinks, function (a) {
      return document.querySelector(a.getAttribute('href'));
    }).filter(Boolean);
    var setActive = function () {
      var pos = window.scrollY + 130;
      var current = headings[0];
      headings.forEach(function (h) { if (h.offsetTop <= pos) current = h; });
      tocLinks.forEach(function (a) { a.classList.remove('active'); });
      if (current) {
        var link = document.querySelector('.toc a[href="#' + current.id + '"]');
        if (link) link.classList.add('active');
      }
    };
    document.addEventListener('scroll', setActive, { passive: true });
    setActive();
  }

  /* FAQ accordion */
  document.querySelectorAll('.faq-item').forEach(function (item) {
    var q = item.querySelector('.faq-q');
    var a = item.querySelector('.faq-a');
    if (!q || !a) return;
    q.addEventListener('click', function () {
      var isOpen = item.classList.contains('open');
      item.parentElement.querySelectorAll('.faq-item.open').forEach(function (other) {
        if (other !== item) {
          other.classList.remove('open');
          other.querySelector('.faq-a').style.maxHeight = null;
        }
      });
      if (isOpen) {
        item.classList.remove('open');
        a.style.maxHeight = null;
      } else {
        item.classList.add('open');
        a.style.maxHeight = a.scrollHeight + 'px';
      }
    });
  });

});
