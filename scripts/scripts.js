// Add target="_blank" to all external links
$("a[href^='http://']").attr("target","_blank");
$("a[href^='https://']").attr("target","_blank");

// Smoooooth scrolling
$('a.smooth_scroll').click(function(){
  $('html, body').animate({
    scrollTop: $( $(this).attr('href') ).offset().top
  }, 500);
  return false;
});

$(document).scroll(function() {
    var beta = $(this).scrollTop();
    var alpha = Math.min(1 * $(this).scrollTop() / 800, 0.9);
    var gamma = Math.min(1 * $(this).scrollTop() / 800, 0.2);
    $(".navbar-default").css('background-color', 'rgba(255, 255, 255, ' + alpha + ')');
    $(".navbar-default").css('border-bottom-color', 'rgba(95, 106, 125, ' + gamma + ')');
    $("#navbar-logo").css('opacity', alpha);

    if (beta < (document.getElementById('cleangreen').clientHeight - document.getElementById('navbar').clientHeight) - 1) {
      $(".navlink").css({"color":"#fff","border-color":"#fff"});
    } else {
      $(".navlink").css({"color":"rgb(95, 106, 125)","border-color":"rgb(95, 106, 125)"});
    }
});

// Trigger sizing functions on window is resize
$( window ).resize(function() {
  // Do nothing!
});
