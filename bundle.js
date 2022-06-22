(function () {
  'use strict';

  document.addEventListener("DOMContentLoaded", function () {
    var mainSplideEl = document.querySelector("[data-js=main-splide]");
    var navSplideEl = document.querySelector("[data-js=nav-splide]");
    var hasMainSplide = !!mainSplideEl;
    var hasNavSplide = !!navSplideEl;

    if (hasNavSplide) {
      navSplideEl.innerHTML = mainSplideEl.innerHTML;
    }

    if (!hasMainSplide) {
      return null;
    }

    var mainSplide = new Splide("[data-js=main-splide]", {
      type: "loop",
      autoplay: true,
      speed: 600,
      pagination: false,
      arrows: true,
      lazyLoad: "nearby",
      rewind: true
    });

    if (hasNavSplide) {
      var navSplide = new Splide("[data-js=nav-splide]", {
        fixedWidth: "20%",
        type: "loop",
        autoplay: true,
        speed: 600,
        pagination: false,
        arrows: false,
        isNavigation: false,
        lazyLoad: "sequential",
        rewind: true,
        breakpoints: {
          419: {
            arrows: true,
            fixedWidth: "100%"
          },
          767: {
            fixedWidth: "50%"
          },
          1023: {
            fixedWidth: "33.3333%"
          },
          1199: {
            fixedWidth: "25%"
          }
        }
      }).mount();
      mainSplide.sync(navSplide).mount();
    } else {
      mainSplide.mount();
    }
  });

}());
//# sourceMappingURL=bundle.js.map
