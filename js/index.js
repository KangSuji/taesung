$(function () {
  //pc gnb depth2
  $(".gnb_wrap").on("mouseenter", function (event) {
    event.preventDefault();

    $(".header").addClass("over");
  });

  $(".gnb_wrap").on("mouseleave", function (event) {
    event.preventDefault();

    $(".header").removeClass("over");
  });

  // 퀵메뉴
  $(".openBtn").click(function () {
    if ($(".navigation").hasClass("hide")) {
      $(".navigation").removeClass("hide");
      $(".openBtn").removeClass("hide");
    } else {
      $(".navigation").addClass("hide");
      $(".openBtn").addClass("hide");
    }
  });

  //스크롤
  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 500) {
      $(".sec01 .sec-right img").css({
        animation: "zoom-out 1s linear",
      });
    }
    if ($(window).scrollTop() > 1000) {
      $(".sec02 .sec-left img").css({
        animation: "zoom-out 1s linear",
      });
    }
    if ($(window).scrollTop() > 1500) {
      $(".sec03 .sec-right img").css({
        animation: "zoom-out 1s linear",
      });
    }
  });
  $(".main_visual-scroll img").click(function () {
    $("html, body").animate({ scrollTop: $(".main_content").offset().top - 50 }, 500);
  });

  //main bg slick
  $(".slide-wrap").slick({
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    fade: true,
    cssEase: "linear",
  });

  //인스타 slick
  $(".insta-feed").slick({
    centerMode: true,
    centerPadding: "90px",
    slidesToShow: 4,
    initialSlide: 3,
    swipeToSlide: true,
    speed: 1300,
  });

  //갤러리 slick
  $(".gallery-right").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    swipeToSlide: true,
    nextArrow: $(".next"),
    prevArrow: $(".prev"),
  });
});
// 갤러리 모달팝업
$(function () {
  $("#close").click(function () {
    modalClose();
  });
  function modalClose() {
    $(".dim").fadeOut();
  }
});
function showModal(src) {
  $(".dim").fadeIn().css({ display: "block" });
  $(".madalImg img").attr("src", src);
}
const date = new Date();
const year = date.getFullYear();
const mon = date.getMonth() + 1;
const hour = date.getHours();
const min = date.getMinutes();
const day = date.getDate();
