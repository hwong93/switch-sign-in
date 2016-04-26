$(document).ready(function(){
  $('.signin').on('click', function(){
    $('.modal').fadeIn();
  });

  $(".close").on('click', function(e){
    $('.modal').fadeOut();
    e.stopPropagation();
  });

  $('.submit').on('click', function(e){
    var count = 0;
    $('input').addClass('error');
    count++;
    // This method will add or remove the error class if mouse is hoverd over it.
      if(count === 1){
        $('input').on({
          mouseenter: function(){
            $(this).removeClass('error');
          },
          mouseleave: function(){
            $(this).addClass('error');
          }
        });
      };

    e.stopPropagation();
  });
  //
  // $('.getstarted').on('mouseenter', '.error', function() {
  //   $(this).removeClass();
  // });
  //


  $('.modal').on('click', function(){
    $(this).fadeOut();
  });

  $('input').on('click', function(e){
    e.stopPropagation();
  })
})
