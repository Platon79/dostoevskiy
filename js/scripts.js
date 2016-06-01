$(document).ready(function(){

  // Change bg on hover
  $('.section-9-list li').mouseover(function(){
    var bgClass = $(this).attr('data-bg');

    $('.section-9').attr('data-bg', bgClass);
  }).mouseout(function(){
    $('.section-9').attr('data-bg', '');
  });

  // Tabs
  $('.specials-tabs li').click(function(){
    var contentName = $(this).attr('data-content');

    $('.specials-content').hide();
    $('.specials-contents .'+contentName).show();

    $('.specials-tabs li').removeClass('active');
    $(this).addClass('active');
  });

  // Anchors
  $('.header-menu a').click(function(event){
    event.preventDefault();

    var id  = $(this).attr('href');
    var top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1500);
  });

});
