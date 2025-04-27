(function () {
  "use strict";

  function toggleScrolled() {
    const selectBody = document.querySelector("body");
    const selectHeader = document.querySelector("#header");
    if (
      !selectHeader.classList.contains("scroll-up-sticky") &&
      !selectHeader.classList.contains("sticky-top") &&
      !selectHeader.classList.contains("fixed-top")
    )
      return;

    if (window.scrollY > 100) {
      selectBody.classList.add("scrolled");
    } else {
      selectBody.classList.remove("scrolled");
    }
  }

  // Night mode toggle
  document.addEventListener("DOMContentLoaded", () => {
    const root = document.documentElement;
    const btnNight = document.getElementById("toggle-night-mode");
    const btnLight = document.getElementById("toggle-light-mode");

    if (btnNight && btnLight) {
      function applyMode(saved) {
        if (saved === "dark") {
          root.classList.add("dark-mode");
          btnNight.classList.add("d-none");
          btnLight.classList.remove("d-none");
        } else {
          root.classList.remove("dark-mode");
          btnNight.classList.remove("d-none");
          btnLight.classList.add("d-none");
        }
      }

      const savedMode = localStorage.getItem("site-mode") || "light";
      applyMode(savedMode);

      btnNight.addEventListener("click", (e) => {
        e.preventDefault();
        root.classList.add("dark-mode");
        btnNight.classList.add("d-none");
        btnLight.classList.remove("d-none");
        localStorage.setItem("site-mode", "dark");
      });

      btnLight.addEventListener("click", (e) => {
        e.preventDefault();
        root.classList.remove("dark-mode");
        btnNight.classList.remove("d-none");
        btnLight.classList.add("d-none");
        localStorage.setItem("site-mode", "light");
      });
    }
  });

  document.addEventListener("scroll", toggleScrolled);
  window.addEventListener("load", toggleScrolled);

  /**
   * Mobile nav toggle
   */
  const mobileNavToggleBtn = document.querySelector(".mobile-nav-toggle");

  function mobileNavToggle() {
    document.querySelector("body").classList.toggle("mobile-nav-active");
    mobileNavToggleBtn.classList.toggle("bi-list");
    mobileNavToggleBtn.classList.toggle("bi-x");
  }

  if (mobileNavToggleBtn) {
    mobileNavToggleBtn.addEventListener("click", mobileNavToggle);
  }

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll("#navmenu a").forEach((navmenu) => {
    navmenu.addEventListener("click", () => {
      if (document.querySelector(".mobile-nav-active")) {
        mobileNavToggle();
      }
    });
  });

  /**
   * Toggle mobile nav dropdowns
   */
  document.querySelectorAll(".navmenu .toggle-dropdown").forEach((navmenu) => {
    navmenu.addEventListener("click", function (e) {
      e.preventDefault();
      this.parentNode.classList.toggle("active");
      this.parentNode.nextElementSibling.classList.toggle("dropdown-active");
      e.stopImmediatePropagation();
    });
  });

  /**
   * Scroll top button
   */
  let scrollTop = document.querySelector(".scroll-top");

  function toggleScrollTop() {
    if (scrollTop) {
      if (window.scrollY > 100) {
        scrollTop.classList.add("active");
      } else {
        scrollTop.classList.remove("active");
      }
    }
  }

  if (scrollTop) {
    scrollTop.addEventListener("click", (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  }

  window.addEventListener("load", toggleScrollTop);
  document.addEventListener("scroll", toggleScrollTop);

  /**
   * Animation on scroll function and init
   */
  function aosInit() {
    AOS.init({
      duration: 600,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  }
  window.addEventListener("load", aosInit);

  /**
   * Animate the skills items on reveal
   */
  document.querySelectorAll(".skills-animation").forEach((item) => {
    new Waypoint({
      element: item,
      offset: "80%",
      handler: function (direction) {
        item.querySelectorAll(".progress .progress-bar").forEach((el) => {
          el.style.width = el.getAttribute("aria-valuenow") + "%";
        });
      },
    });
  });

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({ selector: ".glightbox" });

  /**
   * Init isotope layout and filters
   */
  document.querySelectorAll(".isotope-layout").forEach((isotopeItem) => {
    let layout = isotopeItem.getAttribute("data-layout") || "masonry";
    let filter = isotopeItem.getAttribute("data-default-filter") || "*";
    let sort = isotopeItem.getAttribute("data-sort") || "original-order";
    let initIsotope;

    imagesLoaded(isotopeItem.querySelector(".isotope-container"), function () {
      initIsotope = new Isotope(
        isotopeItem.querySelector(".isotope-container"),
        {
          itemSelector: ".isotope-item",
          layoutMode: layout,
          filter: filter,
          sortBy: sort,
        }
      );
    });

    isotopeItem.querySelectorAll(".isotope-filters li").forEach((filters) => {
      filters.addEventListener("click", function () {
        isotopeItem
          .querySelector(".isotope-filters .filter-active")
          .classList.remove("filter-active");
        this.classList.add("filter-active");
        initIsotope.arrange({ filter: this.getAttribute("data-filter") });
        if (typeof aosInit === "function") {
          aosInit();
        }
      });
    });
  });

  /**
   * Init swiper sliders
   */
  function initSwiper() {
    document.querySelectorAll(".init-swiper").forEach((swiperElement) => {
      let config = JSON.parse(
        swiperElement.querySelector(".swiper-config").innerHTML.trim()
      );

      if (swiperElement.classList.contains("swiper-tab")) {
        initSwiperWithCustomPagination(swiperElement, config);
      } else {
        new Swiper(swiperElement, config);
      }
    });
  }

  window.addEventListener("load", initSwiper);

  /**
   * Frequently Asked Questions Toggle
   */
  document
    .querySelectorAll(".faq-item h3, .faq-item .faq-toggle")
    .forEach((faqItem) => {
      faqItem.addEventListener("click", () => {
        faqItem.parentNode.classList.toggle("faq-active");
      });
    });

  /**
   * Correct scrolling position upon page load for URLs containing hash links.
   */
  window.addEventListener("load", function () {
    if (window.location.hash) {
      const sectionId = decodeURIComponent(window.location.hash.substring(1));
      const section = document.getElementById(sectionId);
      if (section) {
        setTimeout(() => {
          const scrollMarginTop = parseInt(
            getComputedStyle(section).scrollMarginTop
          );
          window.scrollTo({
            top: section.offsetTop - scrollMarginTop,
            behavior: "smooth",
          });
        }, 100);
      }
    }
  });

  /**
   * Navmenu Scrollspy
   */
  const navmenulinks = document.querySelectorAll(".navmenu a");

  function navmenuScrollspy() {
    navmenulinks.forEach((navmenulink) => {
      if (!navmenulink.hash) return;
      const sectionId = decodeURIComponent(navmenulink.hash.substring(1));
      const section = document.getElementById(sectionId);
      if (!section) return;
      const position = window.scrollY + 200;
      if (
        position >= section.offsetTop &&
        position <= section.offsetTop + section.offsetHeight
      ) {
        document
          .querySelectorAll(".navmenu a.active")
          .forEach((link) => link.classList.remove("active"));
        navmenulink.classList.add("active");
      } else {
        navmenulink.classList.remove("active");
      }
    });
  }

  window.addEventListener("load", navmenuScrollspy);
  document.addEventListener("scroll", navmenuScrollspy);
})();
