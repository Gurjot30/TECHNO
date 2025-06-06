/* Theme: Niwax - Creative Web Design & Digital Marketing Agency HTML5 Template
Author: Rajesh-Doot	
File Description: Main JS file of the template*/
(function ($) {
  "use strict";

  //wow animation
  new WOW().init();
  //Mobile nav
  var $main_nav = $("#main-nav");
  var $toggle = $(".toggle");
  var defaultOptions = {
    disableAt: false,
    customToggle: $toggle,
    levelSpacing: 10,
    navTitle: "Niwax Menu",
    levelTitles: true,
    levelTitles: true,
    labelClose: false,
    levelTitleAsBack: true,
    levelOpen: "expand",
    closeOnClick: true,
    insertClose: true,
    closeActiveLevel: true,
    insertBack: true,
  };
  // Nav call plugin
  var Nav = $main_nav.hcOffcanvasNav(defaultOptions);

  //Sticky Header
  function updateScroll() {
    if ($(window).scrollTop() >= 80) {
      $(".navfix").addClass("sticky");
    } else {
      $(".navfix").removeClass("sticky");
    }
  }
  $(function () {
    $(window).scroll(updateScroll);
    updateScroll();
  });

  //Header mega menu
  var $nav = $("li.sbmenu");
  $nav.hover(
    function () {
      $(this).addClass("hover");
    },
    function () {
      $(this).removeClass("hover");
    }
  );

  //Video magnificPopup
  $(".video-link").magnificPopup({
    type: "iframe",
    mainClass: "mfp-fade",
    removalDelay: 160,
  });

  $(window).on("load", function () {
    var owl = $(".service-card-prb");

    owl.owlCarousel({
      items: 4,
      loop: true,
      autoplay: true,
      margin: 20,
      nav: false,
      dots: false,
      autoplayTimeout: 3500,
      autoplayHoverPause: true,
      smartSpeed: 2000,
      responsive: {
        0: { items: 1 },
        520: { items: 2 },
        768: { items: 3 },
        1200: { items: 3 },
        1400: { items: 3 },
        1600: { items: 3 },
      },
    });

    // 🔹 Hide until fully loaded to prevent vertical stacking
    $(".service-card-prb").css("opacity", "1");

    // 🔹 Force refresh to fix layout shifts
    setTimeout(function () {
      owl.trigger("refresh.owl.carousel");
    }, 500);
  });

  //Owl-Carousel - Home testimonial
  var owl = $(".testimonial-card-a");
  owl.owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    autoplayTimeout: 6000,
    autoplayHoverPause: true,
    smartSpeed: 500,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 1,
      },
      1024: {
        items: 1,
      },
      1400: {
        items: 1,
      },
    },
  });

  //Owl-Carousel -portfolio slide
  var owl = $(".porto-slide");
  owl.owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    margin: 10,
    nav: false,
    dots: true,
    stagePadding: 50,
    autoplayTimeout: 350000,
    autoplayHoverPause: true,
    smartSpeed: 2000,
    responsive: {
      0: {
        items: 1,
        stagePadding: 0,
      },
      520: {
        items: 1,
        stagePadding: 0,
      },
      768: {
        items: 1,
        stagePadding: 0,
      },
      1200: {
        items: 1,
      },
      1400: {
        items: 1,
      },
      1600: {
        items: 1,
      },
    },
  });

  //Owl-Carousel -single slide
  var owl = $(".single-slide");
  owl.owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    margin: 10,
    nav: false,
    dots: true,
    stagePadding: 100,
    autoplayTimeout: 3500,
    autoplayHoverPause: true,
    smartSpeed: 2000,
    responsive: {
      0: {
        items: 1,
        stagePadding: 0,
      },
      520: {
        items: 1,
        stagePadding: 0,
      },
      768: {
        items: 1,
        stagePadding: 0,
      },
      1200: {
        items: 1,
      },
      1400: {
        items: 1,
      },
      1600: {
        items: 1,
      },
    },
  });

  //Owl-Carousel - app page bages-slider
  var owl = $(".bages-slider");
  owl.owlCarousel({
    items: 4,
    loop: true,
    autoplay: true,
    centre: true,
    margin: 20,
    nav: false,
    dots: false,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    smartSpeed: 2000,
    responsive: {
      0: {
        items: 2,
      },
      520: {
        items: 3,
      },
      768: {
        items: 3,
      },
      1200: {
        items: 3,
      },
      1400: {
        items: 4,
      },
      1600: {
        items: 4,
      },
    },
  });

  //Owl-Carousel - app page bages-slider
  var owl = $(".logo-weworkfor");
  owl.owlCarousel({
    items: 4,
    loop: true,
    autoplay: true,
    margin: 10,
    nav: false,
    dots: false,
    autoplayTimeout: 1800,
    autoplayHoverPause: false,
    smartSpeed: 2000,
    responsive: {
      0: {
        items: 3,
      },
      520: {
        items: 3,
      },
      768: {
        items: 4,
      },
      1200: {
        items: 4,
      },
      1400: {
        items: 5,
      },
      1600: {
        items: 6,
      },
    },
  });

  //  //Owl-Carousel - Home testimonial
  var owl = $(".testimonial-card-b");
  owl.owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    dots: true,
    dotsContainer: "#testimonials-avatar",
    smartSpeed: 500,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 1,
      },
      1024: {
        items: 1,
      },
      1400: {
        items: 1,
      },
    },
  });

  //full card portfolio
  var owl = $(".zoomowl");
  owl.owlCarousel({
    stagePadding: 200,
    loop: true,
    margin: 10,
    nav: false,
    items: 1,
    lazyLoad: true,
    responsive: {
      0: {
        items: 1,
        stagePadding: 60,
      },
      600: {
        items: 1,
        stagePadding: 100,
      },
      1000: {
        items: 1,
        stagePadding: 200,
      },
      1200: {
        items: 1,
        stagePadding: 250,
      },
      1400: {
        items: 1,
        stagePadding: 300,
      },
      1600: {
        items: 1,
        stagePadding: 350,
      },
      1800: {
        items: 1,
        stagePadding: 400,
      },
    },
  });

  //Counter Up
  $(".counter").counterUp({
    delay: 10,
    time: 2500,
  });

  //Scroll to top
  $.scrollUp({
    animation: "fade",
    scrollImg: {
      active: true,
      type: "background",
    },
  });

  //Portfolio Filter
  $(".card-list").imagesLoaded(function () {
    // init Isotope
    var $grid = $(".card-list").isotope({
      itemSelector: ".single-card-item",
      percentPosition: true,
      masonry: {
        // use outer width of grid-sizer for columnWidth
        columnWidth: ".grid-sizer",
      },
    });
    // filter items on button click
    $(".filter-menu").on("click", "li", function () {
      var filterValue = $(this).attr("data-filter");
      $grid.isotope({
        filter: filterValue,
      });
    });
  });
  //for menu active class
  $(".filter-menu li").on("click", function (event) {
    $(this).siblings(".is-checked").removeClass("is-checked");
    $(this).addClass("is-checked");
    event.preventDefault();
  });

  // background image
  $("[data-background]").each(function () {
    $(this).css(
      "background-image",
      "url(" + $(this).attr("data-background") + ")"
    );
  });

  document.addEventListener("DOMContentLoaded", function () {
    const accordionItems = document.querySelectorAll(".accordion-item");

    accordionItems.forEach((item) => {
      const header = item.querySelector(".accordion-header");

      header.addEventListener("click", function () {
        const isActive = item.classList.contains("active");

        // Close all items
        accordionItems.forEach((i) => i.classList.remove("active"));
        document
          .querySelectorAll(".plus")
          .forEach((plus) => (plus.textContent = "+"));

        // Open current item if it was closed
        if (!isActive) {
          item.classList.add("active");
          header.querySelector(".plus").textContent = "-";
        }
      });
    });
  });

  document.addEventListener("DOMContentLoaded", function () {
    // Featured Project Image Click
    const featuredProject = document.querySelector(
      ".featured-project .image-container1"
    );

    if (featuredProject) {
      featuredProject.addEventListener("click", function (event) {
        event.preventDefault();
        window.location.href = "abs-project.html"; // Change to featured project page
      });
    }

    // Other Project Images Click
    const projectImages = document.querySelectorAll(".project img");

    projectImages.forEach((image) => {
      image.addEventListener("click", function () {
        const projectPage = this.getAttribute("data-link"); // Get project link
        if (projectPage) {
          window.location.href = projectPage;
        }
      });
    });

    // "See More Projects" Button Click
    const seeMoreBtn = document.querySelector(".see-more");

    if (seeMoreBtn) {
      seeMoreBtn.addEventListener("click", function () {
        window.location.href = "all-projects.html"; // Change to your all-projects page
      });
    }
  });

  //end of page
})(jQuery);
