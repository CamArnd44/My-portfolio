$(document).ready(function () {

  $('.box').on('click touchstart', function (e) {
    e.stopPropagation();
    $('.box').not(this).removeClass('touched');
    $(this).toggleClass('touched').removeClass('hovered');
  });
  $('.box').on('mouseenter', function (e) {
    $(this).addClass('hovered');
  });
  $('.box').on('mouseleave', function (e) {
    $(this).removeClass('hovered');
  });
  $(document).on("click touchstart touchend", function () {
    $('.box').removeClass('touched');
  });

  //let sr = ScrollReveal()
  ScrollReveal().reveal('.teaserboxes .col', {
    delay: 200,
    duration: 3000,
    origin: 'bottom',
    distance: '60px',
    interval: 500
  })

});

