window.addEventListener('DOMContentLoaded', () => {
  // * ===== Mask input
  $('input[type="tel"]').mask('+7 (999) 999-99-99');

  //  * ===== Nice Select
  $('select').niceSelect();

  // * ===== Slider
  (function slider() {
    const sliderEl = document.querySelector('.advantages__slider');
    new Swiper(sliderEl, {
      slidesPerView: 5,
      spaceBetween: 40,
      pagination: {
        el: document.querySelector('.advantages__content .swiper-pagination'),
        type: 'progressbar',
      },
      breakpoints: {
        320: {
          spaceBetween: 30,
          slidesPerView: 'auto',
        },
        991: { spaceBetween: 20, slidesPerView: 5 },
        1100: { spaceBetween: 40, slidesPerView: 5 },
      },
    });
  })();

  // * ===== Slider
  (function slider() {
    const sliderEl = document.querySelector('.news__slider');
    new Swiper(sliderEl, {
      pagination: {
        el: document.querySelector('.news__content .swiper-pagination'),
        type: 'progressbar',
      },
      breakpoints: {
        320: {
          spaceBetween: 20,
          slidesPerView: 'auto',
        },
        991: { spaceBetween: 32, slidesPerView: 3 },
      },
    });
  })();

  // * ===== Slider
  (function slider() {
    const sliderEl = document.querySelector('.bottom-nav__slider');
    new Swiper(sliderEl, {
      pagination: {
        el: document.querySelector('.bottom-nav__slider .swiper-pagination'),
        type: 'progressbar',
      },
      spaceBetween: 28,
      slidesPerView: 'auto',
    });
  })();

  // * ===== Slider
  (function slider() {
    const sliderEl = document.querySelectorAll('.products-stock__slider');

    sliderEl.forEach((el) => {
      new Swiper(el, {
        pagination: {
          el: document.querySelector(
            '.products-stock__content .swiper-pagination'
          ),
          type: 'progressbar',
        },
        slidesPerView: 'auto',

        breakpoints: {
          320: {
            spaceBetween: 20,
          },
          991: { spaceBetween: 32 },
        },
      });
    });
  })();

  // * ===== Slider
  (function slider() {
    const sliderEl = document.querySelector('.hero__slider');
    new Swiper(sliderEl, {
      pagination: {
        el: '.swiper-pagination',
        clickable: 'true',
      },
      navigation: {
        nextEl: document.querySelector('.hero__slider .swiper-button-next'),
        prevEl: document.querySelector('.hero__slider .swiper-button-prev'),
      },
      slidesPerView: 1,
    });
  })();

  // * ===== Slider
  (function slider() {
    const sliderEl = document.querySelector('.discount__slider');
    new Swiper(sliderEl, {
      pagination: {
        el: document.querySelector('.discount__content .swiper-pagination'),
        type: 'progressbar',
      },
      breakpoints: {
        320: {
          spaceBetween: 30,
          slidesPerView: 'auto',
        },
        991: { spaceBetween: 32, slidesPerView: 2 },
      },
    });
  })();

  // * ===== Slider
  (function slider() {
    const sliderEl = document.querySelector('.reviews__slider');
    new Swiper(sliderEl, {
      slidesPerView: 'auto',
      spaceBetween: 32,
      navigation: {
        nextEl: document.querySelector('.reviews__content .swiper-button-next'),
        prevEl: document.querySelector('.reviews__content .swiper-button-prev'),
      },
      pagination: {
        el: document.querySelector('.reviews__content .swiper-pagination'),
        type: 'progressbar',
      },
      breakpoints: {
        320: {
          spaceBetween: 20,
        },
        991: { spaceBetween: 32 },
      },
    });
  })();

  // * ===== Slider
  (function slider() {
    const sliderEl = document.querySelector('.brands-slider__slider');
    new Swiper(sliderEl, {
      slidesPerView: 'auto',
      spaceBetween: 32,
      navigation: {
        nextEl: document.querySelector(
          '.brands-slider__content .swiper-button-next'
        ),
        prevEl: document.querySelector(
          '.brands-slider__content .swiper-button-prev'
        ),
      },
      pagination: {
        el: document.querySelector(
          '.brands-slider__content .swiper-pagination'
        ),
        type: 'progressbar',
      },
      breakpoints: {
        320: {
          spaceBetween: 20,
        },
        991: { spaceBetween: 32 },
      },
    });
  })();

  // * ===== Slider
  (function slider() {
    const sliderEl = document.querySelector('.new-slider__slider');
    new Swiper(sliderEl, {
      slidesPerView: 1,
      navigation: {
        nextEl: document.querySelector(
          '.new-slider__slider .swiper-button-next'
        ),
        prevEl: document.querySelector(
          '.new-slider__slider .swiper-button-prev'
        ),
      },
    });
  })();

  // * ===== Slider
  (function slider() {
    const sliderEl = document.querySelectorAll('.product-card__slider');
    sliderEl.forEach((el) => {
      new Swiper(el, {
        slidesPerView: 1,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      });
    });
  })();

  // * ===== Slider
  (function slider() {
    const sliderEl = document.querySelector('.banners__slider');
    new Swiper(sliderEl, {
      slidesPerView: 'auto',
    });
  })();

  // * ===== Slider
  (function slider() {
    const sliderEl = document.querySelector('.product-types__slider');
    new Swiper(sliderEl, {
      slidesPerView: 'auto',
      spaceBetween: 20,
    });
  })();

  // * ===== Slider
  (function slider() {
    const sliderEl = document.querySelectorAll('.products-grid__slider');
    sliderEl.forEach((el) => {
      if (el) {
        new Swiper(el, {
          slidesPerView: 'auto',
          spaceBetween: 32,
          grid: {
            rows: 2,
            fill: 'row',
          },
          pagination: {
            el: '.swiper-pagination',
            type: 'progressbar',
          },
          breakpoints: {
            319: {
              spaceBetween: 20,
              grid: {
                rows: 1,
                fill: 'row',
              },
            },
            991: {
              spaceBetween: 32,
              grid: {
                rows: 2,
                fill: 'row',
              },
            },
          },
        });
      }
    });
  })();

  // * ==== Single Product
  (function verticalSlider() {
    let mySwiperNav = new Swiper('#slider-nav', {
      slidesPerView: 'auto',
      spaceBetween: 12,
      direction: 'vertical',
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        320: {
          direction: 'horizontal',
        },
        991: {
          direction: 'vertical',
        },
      },
    });

    let mySwiper = new Swiper('#slider-main', {
      spaceBetween: 10,
      loopedSlides: 4,
      thumbs: {
        swiper: mySwiperNav,
      },
      navigation: {
        nextEl: document.querySelector('#slider-main .swiper-button-next'),
        prevEl: document.querySelector('#slider-main .swiper-button-prev'),
      },
    });
  })();

  // * ===== Fixed Header
  (function fixedHeader() {
    function scrollHeader() {
      const nav = document.querySelector('header');
      if (this.scrollY >= 90) {
        nav.classList.add('scroll-header');
      } else {
        nav.classList.remove('scroll-header');
      }
    }

    window.addEventListener('scroll', scrollHeader);

    // ! Change
    function changeBg() {
      const header = document.querySelector('header');
      if (window.pageYOffset >= 90) {
        header.classList.add('scroll-header');
      }
    }

    changeBg();
  })();

  // * ===== Accordion
  const toggleAccordion = (accordionControl, accordionContent, accordion) => {
    const filters = document.querySelectorAll(accordionControl);
    filters.forEach((el) => {
      if (el) {
        el.addEventListener('click', (e) => {
          const target = e.target.closest(accordion);
          const content = target.querySelector(accordionContent);
          target.classList.toggle('active');
          if (target.classList.contains('active')) {
            content.style.maxHeight = content.scrollHeight + 'px';
          } else {
            content.style.maxHeight = null;
          }
        });
      }
    });
  };
  toggleAccordion('.accordion-control', '.accordion-content', '.accordion');

  // * ==== Counter
  (function counter() {
    const counterEl = document.querySelectorAll('.counter');

    counterEl.forEach((item) => {
      if (item) {
        item.addEventListener('click', (e) => {
          if (e.target.classList.contains('counter__btn--increase')) {
            e.target.previousElementSibling.value++;
          }

          if (e.target.classList.contains('counter__btn--decrease')) {
            if (e.target.nextElementSibling.value > 1) {
              e.target.nextElementSibling.value--;
            }
          }
        });
      }
    });
  })();

  // * ==== Show Drodown
  (function showDrodown() {
    const catalogContent = document.querySelector('.dropdown-catalog');
    const body = document.querySelector('body');

    body.addEventListener('click', (e) => {
      if (e.target.closest('.catalog-btn')) {
        catalogContent.classList.toggle('active');
      } else if (!e.target.closest('.dropdown-catalog')) {
        catalogContent.classList.remove('active');
      }
    });
  })();

  // * ===== Show Menu
  (function showMenu() {
    const menuBtn = document.querySelector('.header__toggle');
    const menu = document.querySelector('.mobile-menu');
    const menuCloseBtn = document.querySelector('.mobile-menu__close');
    const body = document.querySelector('body');
    const overlay = document.querySelector('.overlay');

    menuBtn.addEventListener('click', (e) => {
      menu.classList.toggle('active');
      overlay.classList.toggle('active');
      body.classList.toggle('no-scroll');
    });

    overlay.addEventListener('click', (e) => {
      menu.classList.remove('active');
      overlay.classList.remove('active');
      body.classList.remove('no-scroll');
    });

    menuCloseBtn.addEventListener('click', (e) => {
      menu.classList.remove('active');
      overlay.classList.remove('active');
      body.classList.remove('no-scroll');
    });
  })();

  (function modileMenuChanger() {
    const mobileDropdown = document.querySelectorAll('.mobile-dropdown');
    const mobileSubdropdown = document.querySelectorAll('.mobile-subdropdown');
    const btn = document.querySelectorAll('.mobile-menu__link');

    btn.forEach((el) => {
      if (el) {
        el.addEventListener('click', (e) => {
          const targetName = el.dataset.target;

          mobileDropdown.forEach((el) => {
            if (targetName === el.dataset.drop) {
              el.classList.add('active');

              el.querySelector('.mobile-dropdown__back').addEventListener(
                'click',
                (e) => {
                  el.classList.remove('active');
                }
              );
            }
          });

          const links = document.querySelectorAll('.mobile-dropdown__link');

          links.forEach((el) => {
            el.addEventListener('click', (e) => {
              const targetName = el.dataset.target;

              mobileSubdropdown.forEach((el) => {
                if (targetName === el.dataset.drop) {
                  el.classList.add('active');

                  el.querySelector(
                    '.mobile-subdropdown__back'
                  ).addEventListener('click', (e) => {
                    el.classList.remove('active');
                  });
                }
              });
            });
          });

          mobileDropdown
            .querySelector('.mobile-dropdown__back')
            .addEventListener('click', (e) => {
              mobileDropdown.classList.remove('active');
            });
        });
      }
    });
  })();

  //   // * ===== Modal
  //   (function modals() {
  //     function bindModal(openBtn, modal, close) {
  //       const openBtnEl = document.querySelectorAll(openBtn);
  //       const modalEl = document.querySelector(modal);
  //       const closeEl = document.querySelectorAll(close);
  //       const body = document.querySelector('body');
  //       if (modalEl) {
  //         openBtnEl.forEach((el) => {
  //           el.addEventListener('click', (e) => {
  //             if (e.target) {
  //               e.preventDefault();
  //             }
  //             modalEl.classList.add('active');
  //             body.classList.add('no-scroll');
  //           });
  //         });
  //         closeEl.forEach((btn) => {
  //           btn.addEventListener('click', (e) => {
  //             modalEl.classList.remove('active');
  //             body.classList.remove('no-scroll');
  //           });
  //         });
  //         modalEl.addEventListener('click', (e) => {
  //           if (e.target === modalEl) {
  //             modalEl.classList.remove('active');
  //             body.classList.remove('no-scroll');
  //           }
  //         });
  //       }
  //     }
  //     bindModal('.online-booking-btn', '.popup--online-booking', '.popup__close');
  //   })();

  // * ===== Toggle Tabs
  function someTabs(headerSelector, tabSelector, contentSelector, activeClass) {
    const header = document.querySelectorAll(headerSelector);
    const tab = document.querySelectorAll(tabSelector);
    const content = document.querySelectorAll(contentSelector);

    header.forEach((el) => {
      if (el) {
        hideTabContent();
        showTabContent();
        function hideTabContent() {
          content.forEach((item) => {
            item.classList.remove('active');
          });
          tab.forEach((item) => {
            item.classList.remove(activeClass);
          });
        }
        function showTabContent(i = 0) {
          content[i].classList.add('active');
          tab[i].classList.add(activeClass);
        }
        header.forEach((item) => {
          if (item) {
            item.addEventListener('click', (e) => {
              const target = e.target;
              if (target.classList.contains(tabSelector.replace(/\./, ''))) {
                tab.forEach((item, i) => {
                  if (target == item || target.parentNode == item) {
                    hideTabContent();
                    showTabContent(i);
                  }
                });
              }
            });
          }
        });
      }
    });
  }
  someTabs(
    '.products-grid__content',
    '.products-grid__btn',
    '.products-grid__panel',
    'active'
  );

  // * ===== Toggle Tabs
  function someTabs(headerSelector, tabSelector, contentSelector, activeClass) {
    const header = document.querySelectorAll(headerSelector);
    const tab = document.querySelectorAll(tabSelector);
    const content = document.querySelectorAll(contentSelector);

    header.forEach((el) => {
      if (el) {
        hideTabContent();
        showTabContent();
        function hideTabContent() {
          content.forEach((item) => {
            item.classList.remove('active');
          });
          tab.forEach((item) => {
            item.classList.remove(activeClass);
          });
        }
        function showTabContent(i = 0) {
          content[i].classList.add('active');
          tab[i].classList.add(activeClass);
        }
        header.forEach((item) => {
          if (item) {
            item.addEventListener('click', (e) => {
              const target = e.target;
              if (target.classList.contains(tabSelector.replace(/\./, ''))) {
                tab.forEach((item, i) => {
                  if (target == item || target.parentNode == item) {
                    hideTabContent();
                    showTabContent(i);
                  }
                });
              }
            });
          }
        });
      }
    });
  }
  someTabs('.help__tabs', '.help-tabs__btn', '.help-tabs__content', 'active');
  someTabs('.brand', '.sort__btn', '.brand-products__panel', 'active');
  someTabs('.order__left', '.order-box__item', '.order-box__content', 'active');
  someTabs(
    '.product-tabs',
    '.product-tabs__top-btn',
    '.product-tabs__content',
    'active'
  );
  someTabs(
    '.dropdown-catalog',
    '.dropdown-catalog__btn',
    '.dropdown-catalog__content',
    'active'
  );
});
