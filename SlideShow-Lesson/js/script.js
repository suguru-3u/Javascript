$("document").ready(function(){
  $(".theTarget").skippr();
});

$(".theTarget").skippr({
  transition: 'fade',
  speed: 3000,
  easing: 'easeOutQuart',
  navType: 'block',
  childrenEleemtType: 'div',
  arrows: true,
  autoPlay: true,
  autoPlayDuration : 3000,
  keyboardOnAlways : true,
  hidePrevious : false
});
