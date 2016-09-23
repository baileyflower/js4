/*js file*/
$(function(){

  var count = 0;
  var maxCount = "10";
  var $txt = $(".container__count-text");
  var $btn = $(".container__btn");
  var btn_fade_spd = 300;

  $btn.click(function(){
    num = $(this).hasClass("increment") ? 1 : -1;
    count += (num);
    if( count < 0 ) count = 0;
    if( count > maxCount ) count = maxCount;
    $txt.text(count);
  })

  $btn.mouseover(
    function(){
      $(this).css("opacity","0.2")
      $(this).stop().fadeTo(btn_fade_spd,0.5);
    }
  );

  $btn.mouseout(
    function(){
      $(this).css("opacity","1")
      $(this).stop().fadeTo(btn_fade_spd,1);
    }
  );


})//end function
