$(function(){
  var textIO = false;
  $('.js-accordion-button').click(function(){
    $('.js-accordion-body').slideToggle();
    // $('.js-accordion-body').slideToggle();

    if(textIO === false){
      $('.js-accordion-button').text('▲ 閉じる');
      textIO = true;
    }else{
      $('.js-accordion-button').text('▼ もっと見る');
      textIO = false;
    }
  });

});
