$(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() >= 300) {
      $(".go_top").fadeIn(1000);
    } else {
      $(".go_top").fadeOut(1000);
    }
  });

  $(".go_top").click(function (e) {
    e.preventDefault();
    $("html, body").stop().animate({ scrollTop: 0 }, 500);
  });
});
