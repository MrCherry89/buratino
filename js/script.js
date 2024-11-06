$(document).ready(function () {
  $(".footer .links h2").on("click", function () {
    $(this).find("img").toggleClass("rotate");
    $(this).closest(".links").find("a").toggleClass("hide");
  });

  $(".expand").on("click", function () {
    $(this).closest(".wrapper").find(".texts").toggleClass("show");
    $(this).closest(".wrapper").find(".texts  img").toggleClass("hide");
    if ($(".texts").hasClass("show")) {
      $(".expand").text("Скрыть");
    } else {
      $(".expand").text("Раскрыть полностью");
    }
  });

  function initSlickSlider2() {
    if ($(window).width() < 1201) {
      if (!$(".instagram-slider").hasClass("slick-initialized")) {
        $(".instagram-slider").slick({
          dots: false,
          arrows: false,
          slidesToShow: 1,
          slideToScroll: 1,
          variableWidth: true,
          autoplay: true,
          autoplaySpeed: 1000,
        });
      }
    } else {
      if ($(".instagram-slider").hasClass("slick-initialized")) {
        $(".instagram-slider").slick("unslick");
      }
    }
  }

  initSlickSlider2();

  $(window).resize(function () {
    initSlickSlider2();
  });

  $(".stock-slider").slick({
    dots: true,
    arrows: true,
    slidesToShow: 3,
    slideToScroll: 1,
    prevArrow: $(".stock-slider-wrap .slider-navigation .slick-prev"),
    nextArrow: $(".stock-slider-wrap .slider-navigation .slick-next"),
    responsive: [
      {
        breakpoint: 1201,
        settings: {
          variableWidth: true,
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          autoplay: true,
          autoplaySpeed: 1000,
          variableWidth: true,
          slidesToShow: 1,
          dots: false,
          arrows: false,
        },
      },
    ],
  });

  $(".info-slider").slick({
    dots: false,
    arrows: false,
    slidesToShow: 3,
    slideToScroll: 1,
    responsive: [
      {
        breakpoint: 1351,
        settings: {
          variableWidth: true,
          slidesToShow: 1,
        },
      },
    ],
  });

  $(".useful-slider").slick({
    dots: true,
    arrows: true,
    slidesToShow: 2,
    slideToScroll: 1,
    prevArrow: $(".useful-articles .slider-navigation .slick-prev"),
    nextArrow: $(".useful-articles .slider-navigation .slick-next"),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          variableWidth: true,
          slidesToShow: 1,
        },
      },
    ],
  });

  $(".tab-menu li button").on("click", function (e) {
    e.preventDefault();
    $(this).closest(".tab-menu").find("li").removeClass("active");
    $(this).closest("li").addClass("active");
    var index = $(this).closest("li").index();
    $(".tab-content-item").removeClass("active");
    $(".tab-content-item").eq(index).addClass("active");
  });

  // Открываем первый вопрос по умолчанию
  $(".questions__item").first().addClass("opened active");
  $(".questions__item")
    .first()
    .find(".questions__item-body")
    .addClass("active")
    .slideDown();
  $(".questions__item").first().find(".icon").addClass("rotate");

  $(".questions__item .questions__item-heading").on("click", function (e) {
    e.preventDefault();

    // Проверяем, открыт ли уже этот вопрос
    const currentItem = $(this).closest(".questions__item");
    const isAlreadyOpen = currentItem.hasClass("opened");

    // Закрываем все вопросы
    $(".questions__item").removeClass("opened active");
    $(".questions__item-body").removeClass("active").slideUp();
    $(".questions__item .icon").removeClass("rotate");

    // Если текущий вопрос не был открыт, открываем его
    if (!isAlreadyOpen) {
      currentItem.addClass("opened active");
      currentItem.find(".questions__item-body").addClass("active").slideDown();
      $(this).find(".icon").addClass("rotate");
    }
  });

  $(".heart").on("mouseenter", function () {
    if ($(this).find(".icon").hasClass("active")) {
      $(this).find(".tooltip").text("Удалить из избранного");
    } else {
      $(this).find(".tooltip").text("Добавить в избранное");
    }
  });

  $(".product-count .btn-minus").addClass("btn-disabled");

  $(".product-count .input-number").on("change", function () {
    if ($(this).val() == 1) {
      $(this)
        .closest(".product-count")
        .find(".btn-minus")
        .addClass("btn-disabled");
    } else {
      $(this)
        .closest(".product-count")
        .find(".btn-minus")
        .removeClass("btn-disabled");
    }
  });

  $(".btn-minus").on("click", function (e) {
    e.preventDefault();
    var number =
      parseInt($(this).closest(".product-count").find(".input-number").val()) -
      1;
    $(this)
      .closest(".product-count")
      .find(".input-number")
      .val(number > 0 ? number : 1)
      .change();
  });

  $(".btn-plus").on("click", function (e) {
    e.preventDefault();
    var number =
      parseInt($(this).closest(".product-count").find(".input-number").val()) +
      1;
    $(this)
      .closest(".product-count")
      .find(".input-number")
      .val(number)
      .change();
  });

  $(".info-top-slider").slick({
    dots: false,
    arrows: false,
    slidesToShow: 1,
    slideToScroll: 1,
    centerMode: true,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 1500,
    speed: 800,
  });

  $(".info-bottom-slider").slick({
    dots: false,
    arrows: false,
    slidesToShow: 4,
    slideToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 1000,
    responsive: [
      {
        breakpoint: 1301,
        settings: {
          variableWidth: true,
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1025,
        settings: {
          autoplay: false,
          variableWidth: true,
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 476,
        settings: {
          variableWidth: false,
          autoplay: false,
          slidesToShow: 1,
        },
      },
    ],
  });

  $(".select-wrap select").select2({
    minimumResultsForSearch: 6,
  });

  $(".banner-slider").slick({
    dots: true,
    arrows: false,
    slidesToShow: 1,
    slideToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
  });

  $(".drop-menu").click(function (e) {
    e.stopPropagation();
    $(this).toggleClass("is-active");
    $(".catalog-menu-wrap").toggleClass("open");
    $(".menu-wrap").toggleClass("radius");
    $("body, html").toggleClass("overflow");
    $(".header-info").toggleClass("bg");
  });

  $(".catalog-menu-wrap .close").click(function (e) {
    e.stopPropagation();
    $(".catalog-menu-wrap").removeClass("open");
    $("body, html").removeClass("overflow");
  });

  $(".drop-menu").click(function (e) {
    if ($(window).width() < 1025) {
      e.stopPropagation();
      $("body, html").toggleClass("overflow");
    }
  });

  $(".catalog-menu-wrap").on("click", function (e) {
    e.stopPropagation();
  });

  $(document).on("click", function () {
    $(".catalog-menu-wrap").removeClass("open");
    $(".drop-menu").removeClass("is-active");
    $("body, html").removeClass("overflow");
    $(".header-info").removeClass("bg");
  });

  var lastScrollTop = 0; // Последняя позиция скролла

  $(window).scroll(function () {
    var currentScroll = $(this).scrollTop(); // Текущая позиция скролла

    // Если прокручиваем страницу вниз и не в самом верху
    if (currentScroll > lastScrollTop && currentScroll > 10) {
      $(".main-header").addClass("fixed"); // Добавляем класс fixed
    }
    // Если прокручиваем страницу вверх и возвращаемся на самый верх
    else if (currentScroll < lastScrollTop && currentScroll <= 10) {
      $(".main-header").removeClass("fixed"); // Удаляем класс fixed
    }

    lastScrollTop = currentScroll; // Обновляем последнюю позицию скролла
  });

  $(".new-slider").slick({
    dots: true,
    arrows: true,
    slidesToShow: 4,
    slideToScroll: 1,
    prevArrow: $(".new-wrap .title-wrap .slider-navigation .slick-prev"),
    nextArrow: $(".new-wrap .title-wrap .slider-navigation .slick-next"),
    responsive: [
      {
        breakpoint: 1301,
        settings: {
          variableWidth: true,
          slidesToShow: 1,
        },
      },
    ],
  });

  $(".phone-number-input").inputmask({
    mask: "+7 (999)-999-99-99",
  });

  $(".popup").magnificPopup({
    type: "inline",
    mainClass: "mfp-fade",
  });

  $(".popular-slider").slick({
    dots: true,
    arrows: true,
    slidesToShow: 4,
    slideToScroll: 1,
    prevArrow: $(".popular-wrap .title-wrap .slider-navigation .slick-prev"),
    nextArrow: $(".popular-wrap .title-wrap .slider-navigation .slick-next"),
    responsive: [
      {
        breakpoint: 1301,
        settings: {
          variableWidth: true,
          slidesToShow: 1,
        },
      },
    ],
  });

  $(".review-slider").slick({
    dots: true,
    arrows: true,
    slidesToShow: 2,
    slideToScroll: 1,
    prevArrow: $(".review-slider-wrap .slider-navigation .slick-prev"),
    nextArrow: $(".review-slider-wrap .slider-navigation .slick-next"),
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          variableWidth: true,
          slidesToShow: 1,
        },
      },
    ],
  });

  function initializeSliders() {
    $(".product-page-slider").each(function () {
      $(this).slick({
        dots: true,
        arrows: true,
        slidesToShow: 1,
        variableWidth: true,
        slideToScroll: 1,
        prevArrow: $(this)
          .closest(".product-page-wrap")
          .find(".slider-navigation .slick-prev"),
        nextArrow: $(this)
          .closest(".product-page-wrap")
          .find(".slider-navigation .slick-next"),
        responsive: [
          {
            breakpoint: 1025,
            settings: {
              variableWidth: true,
              slidesToShow: 1,
            },
          },
        ],
      });
    });
  }

  // Вызови функцию для инициализации слайдеров
  initializeSliders();

  $(".basket-button").on("click", function () {
    $(this).hide();
    $(this).closest(".basket-buttons").find(".add-basket").addClass("show");
  });

  $(".heart .icon").on("click", function () {
    $(this).toggleClass("active");
  });

  // Открытие/закрытие фильтра при клике на .filter-top
  $(".sorting-filter-btn .sorting-filter-top").on("click", function () {
    $(this).closest(".sorting-filter-btn").toggleClass("no-radius");
    $(this).siblings(".sorting-filter-bottom").toggleClass("open");
  });

  // Изменение текста и закрытие фильтра при выборе элемента
  $(".sorting-filter-bottom .item").on("click", function () {
    let itemText = $(this).find(".text").text(); // Текст выбранного элемента
    $(".sorting-filter-top .text").text(itemText); // Замена текста в .filter-top
    $(".sorting-filter-bottom").removeClass("open"); // Закрытие меню
    $(".sorting-filter-btn").removeClass("no-radius"); // Возврат радиуса

    // Обновление активного элемента
    $(".sorting-filter-bottom .item").removeClass("active"); // Удаление активного класса у всех элементов
    $(this).addClass("active"); // Добавление активного класса к выбранному элементу
  });

  $(".sorting-filter-mob-btn").on("click", function () {
    $(".left-info").toggleClass("show");
  });

  $(".close-filter").on("click", function () {
    $(".left-info").removeClass("show");
  });

  $(".show-all").on("click", function (e) {
    e.preventDefault();
    $(this)
      .closest(".right-info")
      .find(".items .product-item-new")
      .removeClass("hide");
    $(this).hide();
  });

  $(".info-wrapper .title-top").on("click", function () {
    $(this).closest(".info-wrapper").find(".info").toggleClass("hide");
    $(this).find("button").toggleClass("rotate");
    $(this).closest(".info-wrapper").find(".title-top").toggleClass("margin");
  });

  $("#order-call-form").validate({
    errorPlacement: function (error, element) {},
  });

  let lastScrollTop3 = 0;
  const header = $(".header");

  $(window).on("scroll", function () {
    let scrollTop = $(this).scrollTop();

    if (scrollTop > lastScrollTop3) {
      header.addClass("header-fixed");
    } else {
      if (scrollTop === 0) {
        header.removeClass("header-fixed");
      }
    }

    lastScrollTop3 = scrollTop;
  });

  $(".popup-youtube, .popup-vimeo, .popup-gmaps").magnificPopup({
    disableOn: 700,
    type: "iframe",
    mainClass: "mfp-fade",
    removalDelay: 160,
    preloader: false,

    fixedContentPos: false,
  });

  const range = document.querySelectorAll(".range-slider span input");
  progress = document.querySelector(".range-slider .progress");
  let gap = 0.1;
  const inputValue = document.querySelectorAll(".numberVal input");

  range.forEach((input) => {
    input.addEventListener("input", (e) => {
      let minRange = parseInt(range[0].value);
      let maxRange = parseInt(range[1].value);

      if (maxRange - minRange < gap) {
        if (e.target.className === "range-min") {
          range[0].value = maxRange - gap;
        } else {
          range[1].value = minRange + gap;
        }
      } else {
        progress.style.left = (minRange / range[0].max) * 100 + "%";
        progress.style.right = 100 - (maxRange / range[1].max) * 100 + "%";
        inputValue[0].value = minRange;
        inputValue[1].value = maxRange;
      }
    });
  });

  $(".slider-for").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    asNavFor: ".slider-nav",
  });
  $(".slider-nav").slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    asNavFor: ".slider-for",
    dots: false,
    arrows: true,
    focusOnSelect: true,
    prevArrow: $(".slider-nav-wrap .slider-navigation .slick-prev"),
    nextArrow: $(".slider-nav-wrap .slider-navigation .slick-next"),
    responsive: [
      {
        breakpoint: 1301,
        settings: {
          slidesToShow: 5,
          focusOnSelect: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          vertical: false,
          centerMode: true,
          slidesToShow: 3,
          focusOnSelect: true,
        },
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 2,
          focusOnSelect: true,
        },
      },
    ],
  });

  AOS.init();
});
