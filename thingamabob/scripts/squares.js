function makeBlock(t, l, w, h, d) {
  var block = document.createElement('div');
  block.style.top = "" + t + "px";
  block.style.left = "" + l + "px";
  block.style.width = w;
  block.style.height = h;
  block.className = 'block';
  block.style.backgroundColor = randomColor();
  document.getElementById("contain").appendChild(block);
}

function randomColor(oldColor = null) {
  var r = 0,
    g = 0,
    b = 0;
  if (oldColor !== null) {
    oldColor = oldColor.slice(0, 4).slice(0, -1).replace(/,/g, '').split(" ");
    r = oldColor[0];
    g = oldColor[1];
    b = oldColor[2];
  }

  r += Math.floor((Math.random() * 255) + 1) % 255;
  g += Math.floor((Math.random() * 255) + 1) % 255;
  b += Math.floor((Math.random() * 255) + 1) % 255;
  var newcolor = 'rgb(' + r + ', ' + g + ', ' + b + ')';
  return newcolor;
}

function main(w, h, bw, bh) {
  for (i = 0; i < w; i += bw) {
    for (j = 0; j < h; j += bh) {
      if(i%100==50){
        makeBlock(j, i, bw, bh, i+j);
      }else{
        makeBlock(j, i, bw, bh, i+j);
      }
    }
  }
}

$(document).ready(function() {
  var width = $(document).width();
  var height = $(document).height()
  var bw = width / 5;
  var bh = bw;
  main(width, height, bw, bh);
  $('#contain').find('.block:first').remove();
  function discoFloorIt() {
    $('.block').each(function() {

      var oldColor = $(this).backgroundColor;
      var newColor = randomColor(oldColor);
      $(this).animate({
        backgroundColor: newColor,
        width: bw * 0.9,
        height: bh * 0.9
      }).animate({
        backgroundColor: oldColor,
        width: bw * 0.96,
        height: bh * .96
      }, 4000, discoFloorIt);
    });
  }

  $('.block').click(function() {
    $(this).append('<div class="text">what up?</div>');
    $(this).children('div').delay(2000).queue(function() {
      $(this).remove()
        .dequeue();

    });
  });
  discoFloorIt();
});

$(window).resize( function() {

window.location.href = window.location.href;

});