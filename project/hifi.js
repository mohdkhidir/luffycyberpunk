/* Hi-fi landing — interactions: nav scroll, reveals, parallax, count-up */
(function () {
  "use strict";

  // --- Nav background on scroll ---
  var nav = document.querySelector(".nav");
  function onScrollNav() {
    if (window.scrollY > 40) nav.classList.add("scrolled");
    else nav.classList.remove("scrolled");
  }

  // --- Mobile fullscreen menu ---
  var burger = document.getElementById("navBurger");
  var closeBtn = document.getElementById("navClose");
  var menu = document.getElementById("mobileMenu");
  function setMenu(open) {
    document.body.classList.toggle("menu-open", open);
    if (burger) burger.setAttribute("aria-expanded", open ? "true" : "false");
    if (menu) menu.setAttribute("aria-hidden", open ? "false" : "true");
  }
  if (burger) burger.addEventListener("click", function () { setMenu(!document.body.classList.contains("menu-open")); });
  if (closeBtn) closeBtn.addEventListener("click", function () { setMenu(false); });
  if (menu) menu.querySelectorAll(".mobile-menu__links a, .mobile-menu__play").forEach(function (a) {
    a.addEventListener("click", function () { setMenu(false); });
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && document.body.classList.contains("menu-open")) setMenu(false);
  });
  // close menu if resized up to desktop
  window.addEventListener("resize", function () {
    if (window.innerWidth > 900 && document.body.classList.contains("menu-open")) setMenu(false);
  });

  // --- Hero parallax (bg drifts slower than scroll) ---
  var heroBg = document.querySelector(".hero__bg");
  var ticking = false;
  function parallax() {
    if (document.body.classList.contains("no-motion")) return;
    var y = window.scrollY;
    if (heroBg && y < window.innerHeight) {
      heroBg.style.transform = "translateY(" + (y * 0.28).toFixed(1) + "px) scale(1.04)";
    }
  }
  function onScroll() {
    if (!ticking) {
      window.requestAnimationFrame(function () {
        onScrollNav();
        parallax();
        ticking = false;
      });
      ticking = true;
    }
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScrollNav();

  // --- Scroll reveal ---
  var reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.16, rootMargin: "0px 0px -8% 0px" });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add("in"); });
  }

  // --- Stat count-up ---
  function animateCount(el) {
    var target = parseFloat(el.getAttribute("data-count"));
    var suffix = el.getAttribute("data-suffix") || "";
    var dec = (target % 1 !== 0) ? 1 : 0;
    var dur = 1200, start = null;
    function step(ts) {
      if (!start) start = ts;
      var p = Math.min((ts - start) / dur, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      el.firstChild.textContent = (target * eased).toFixed(dec);
      if (p < 1) requestAnimationFrame(step);
      else el.firstChild.textContent = target.toFixed(dec);
    }
    requestAnimationFrame(step);
  }
  var counters = document.querySelectorAll("[data-count]");
  if ("IntersectionObserver" in window) {
    var io2 = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { animateCount(e.target); io2.unobserve(e.target); }
      });
    }, { threshold: 0.6 });
    counters.forEach(function (el) { io2.observe(el); });
  }

  // --- Title glitch flicker on load ---
  var title = document.querySelector(".hero__title");
  if (title && !document.body.classList.contains("no-motion")) {
    title.style.opacity = "0";
    title.style.transform = "translateY(16px)";
    title.style.transition = "opacity .9s ease, transform .9s cubic-bezier(.2,.7,.2,1)";
    setTimeout(function () { title.style.opacity = "1"; title.style.transform = "none"; }, 180);
  }
})();
