$(function () {
  $(".sidenav")
    .sidenav()
    .on("click tap", "li a", () => {
      $(".sidenav").sidenav("close");
    });

  $(".one_card").slick({
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 2000,
  });
});
document.addEventListener("DOMContentLoaded", function () {
  window.setTimeout(document.querySelector("#banner-svg").classList.add("animated"), 1000);
});
