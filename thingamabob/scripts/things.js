$(function() {
  var page = window.location.href;
  var right = 90;
  var left = -90;
  var top = 0;
  var bottom = 180;
  $('#right').hover(function(){
    document.styleSheets[1].addRule('nav:before','transform: rotate('+right+'deg);');
  });
  $('#left').hover(function(){
    document.styleSheets[1].addRule('nav:before','transform: rotate('+left+'deg);');
  });
  $('#top').hover(function(){
    document.styleSheets[1].addRule('nav:before','transform: rotate('+top+'deg);');
  });
  $('#bottom').hover(function(){
    document.styleSheets[1].addRule('nav:before','transform: rotate('+bottom+'deg);');
  });
  $('nav').mouseleave(function(){
    if(page.indexOf("adventure") > -1){
      document.styleSheets[1].addRule('nav:before','transform: rotate('+right+'deg);');
    }
    else if(page.indexOf("how") > -1){
      document.styleSheets[1].addRule('nav:before','transform: rotate('+bottom+'deg);');
    }else if(page.indexOf("square") > -1){
      document.styleSheets[1].addRule('nav:before','transform: rotate('+left+'deg);');
    }else{
      document.styleSheets[1].addRule('nav:before','transform: rotate('+top+'deg);');
    }
  });
});