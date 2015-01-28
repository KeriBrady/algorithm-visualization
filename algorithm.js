var array = [45, 101, 32, 99, 12, 3, 6, 35, 67, 0, 28];

for (i in array) {
 $('#list').append('<li>' + array[i] +'</li>');
}

var sort = function() {
  var i = 0;
  var interval = setInterval(loop, 1250);

  function loop() {
    var start = 0;
    $('li').each(function() {
      if(Number($(this).text()) < Number($(this).prev().text())) {
        $('li').removeClass('change');
        $(this).addClass('change');
        $(this).insertBefore($(this).prev());
      }
    }) 
    i++;       
    if (i == $('li').length) {
      clearInterval(interval);
    }
  }
}

$('#sort').on('click', sort);
