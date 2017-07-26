$(function(){
  var textIO = false;
  $('.js-acodion-button').click(function(){
    $('.js-acodion-body').slideToggle();
    // $('.js-acodion-body').slideToggle();

    if(textIO === false){
      $('.js-acodion-button').text('▲閉じる');
      textIO = true;
    }else{
      $('.js-acodion-button').text('▼もっと見る');
      textIO = false;
    }
  });

});
