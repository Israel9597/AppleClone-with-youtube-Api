import $ from "jquery";

$(document).on("click", ".footer-links-wrapper h3", function () {
  console.log("hello");
  if ($(window).width() <= 768) {
    // $(this).next("ul").slideToggle();
    $(this).toggleClass("expanded");
    $(this).next().slideToggle();
  } else {
    $(this).next("ul").show();
  }
});
$(window).on("resize", function () {
  window.location.reload();
});
