$(function () {
  $(".tabs").tabs();
  $('.collapsible').collapsible();
  $('.sidenav')
        .sidenav()
        .on('click tap', 'li a', () => {
            $('.sidenav').sidenav('close');
        });
});
AOS.init();
document.addEventListener("DOMContentLoaded", function () {
  window.setTimeout(
    document.querySelector("#banner-svg").classList.add("animated"),
    1000
  );
});
