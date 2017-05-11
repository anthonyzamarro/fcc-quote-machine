$(document).ready(function() {
  var url = 'http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?';
  var quote;
  var author;
  $('#btn').click(function(){
    $('#quote').animate({
      opacity: 0
    }, 50),
    $('#author').animate({
      opacity: 0
    }, 50);
    $.getJSON(url, function(data){
      quote = data.quoteText;
      author = data.quoteAuthor;
      $('#quote').html('"' + quote + '"');
      $('#author').html(" -" + author);
      $('#quote').animate({
        opacity: 1
      }, 900),
      $('#author').animate({
        opacity: 1
      }, 900)
    });
  });
  $('#tweet').click(function(){
        if(quote.length > 140) {
          $('#quote').html('Please, choose a shorter quote');
        } else {
          window.open('https://twitter.com/intent/tweet?text=' + quote  + " -" + author);
        }
    });

});
