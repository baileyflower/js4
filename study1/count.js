$(function(){

  var count = 0;
  var btn_fade_spd = 300;
  var $inc = $(".increment")
  var $dec = $(".decrement")
  var $btn = $(".container__btn");
  var $txt = $(".container__count-text")


  $btn.mouseover(
    function(){
      $(this).css("opacity","0.5");
      $(this).stop().fadeTo(btn_fade_spd,0.5);
    }
  );

  $btn.mouseout(
    function(){
      $(this).css("opacity","1");
      $(this).stop().fadeIn(btn_fade_spd,1);
    }
  );

  function countUp(){
    if( count <= 10 ){
      count = count + 1;  }
    if( count > 10 ){
      count = "これ以上は増えません";
    }
    countAction();
    }

  $inc.click(
    function(){
      countUp();
    }
  )

  function countDown(){
    if( count >= 0 ){
      count = count -1; }
    if( count < 0 ){
      count = "これ以上は減りません";
    }
    countAction();
  }

  $dec.click(
    function(){
      countDown();
    }
  )

  function countAction(){
    $txt.text(count);
  }


})
