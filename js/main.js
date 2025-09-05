(function ($) {
  "use strict";

  // Spinner
  var spinner = function () {
    setTimeout(function () {
      if ($("#spinner").length > 0) {
        $("#spinner").removeClass("show");
      }
    }, 1);
  };
  spinner();

  // Initiate the wowjs
  new WOW().init();

  // Sticky Navbar
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $(".sticky-top").addClass("shadow-sm").css("top", "0px");
      $("body").css("margin-top", "100px");
    } else {
      $(".sticky-top").removeClass("shadow-sm").css("top", "-100px");
      $("body").css("margin-top", "00px");
    }
  });

  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $(".back-to-top").fadeIn("slow");
    } else {
      $(".back-to-top").fadeOut("slow");
    }
  });

  $(".back-to-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo");
    return false;
  });

  // Testimonials carousel
  $(".testimonial-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1000,
    items: 1,
    dots: true,
    loop: true,
  });

  $(".nav-item.nav-link").click(function () {
    $(".navbar-toggler").trigger("click");
  });
})(jQuery);

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3, // show 3 cards at a time
  spaceBetween: 30, // gap between cards
  loop: true, // infinite loop
  autoplay: {
    delay: 3000, // auto slide every 3s
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    }, // mobile
    768: {
      slidesPerView: 2,
    }, // tablet
    1024: {
      slidesPerView: 3,
    }, // desktop
  },
});
