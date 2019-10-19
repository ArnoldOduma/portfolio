
$(document).ready(function () {
  $('.new').hide(100);
  setTimeout(function () {
    $('.new').fadeIn(2000);
  }, 5000);

  $('.exit').click(function (e) {
    e.preventDefault();
    $('.new').fadeOut(1000);
    setTimeout(function () {
      window.location.href = 'https://portfolio-937b2.firebaseapp.com/portfolio';
    }, 6000);
  });

});