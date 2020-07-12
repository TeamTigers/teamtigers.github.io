$(function () {
  $(".tabs").tabs();
});

document.addEventListener("DOMContentLoaded", function () {
  window.setTimeout(
    document.querySelector("#banner-svg").classList.add("animated"),
    1000
  );
});
