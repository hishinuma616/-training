$(function() {
    var count = 7;
 $('.js-short-text').each(function() {
     var thisText = $(this).text();
      var textLength = thisText.length;
       if (textLength > count) {
            var showText = thisText.substring(0, count);
            var insertText = showText;
          insertText += '<span class="omit">…</span>';
            $(this).html(insertText);
       };
  });
});
