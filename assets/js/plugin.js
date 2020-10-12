$(function () {
  $(".tabs").tabs();
  $(".sidenav").sidenav();
  $('.collapsible').collapsible();
});
AOS.init();
document.addEventListener("DOMContentLoaded", function () {
  window.setTimeout(
    document.querySelector("#banner-svg").classList.add("animated"),
    1000
  );
});
