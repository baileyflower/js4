/*js file*/

$(function(){

  var cont = '<div class="container">';
  var text = '<div class="container__count-text">0';
  var inc  = '<div class="container__btn increment">+';
  var dec  = '<div class="container__btn decrement">-';

  $("body").prepend(cont);

  var $cont = $(".container")

  $cont.prepend(text);
  $cont.append(inc, dec);


/*<--HTMLパラグラフの追加はここまで-->*/
/*<--ここからはクリックした時のアクションの記述-->*/


  var count = 0;
  var maxCount = 10;
  var $inc = $(".increment");
  var $dec = $(".decrement");
  var $txt = $(".container__count-text");


  function countUp(){
    if( count < maxCount){
      count = count + 1;
    }
    countAction();
  }

  function countDown(){
    if( count > 0){
      count = count - 1;
    }
    countAction();
  }

  function countAction(){
    $txt.text(count);
  }

  $inc.click(
    function(){
      countUp();
    }
  )

  $dec.click(
    function(){
      countDown();
    }
  )



})//end function
