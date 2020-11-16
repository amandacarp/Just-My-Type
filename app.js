//only have lowercase keyboard appear when page loads
$(document).ready(function() {
    $('#keyboard-upper-container').hide();
 });

 //when shift is pressed- hide lowercase, show uppercase
 $(document).keydown(function(event){
    var whichKey = event.which
    if (whichKey == 16){
        $('#keyboard-lower-container').hide();
        $('#keyboard-upper-container').show();
    }
  });

  $(document).keyup(function(event){
    var whichKey = event.which
    if (whichKey == 16){
        $('#keyboard-lower-container').show();
        $('#keyboard-upper-container').hide();
    }
  });

//when each button is pressed- highlight - ~
$(document).keypress(function(event){
    if (event.which == 126){
        $('#126').css('background-color', 'yellow');
   }
})

$(document).keyup(function(){
        $('#126').removeAttr('style');
   })

//when each button is pressed- highlight - !
$(document).keypress(function(event){
    if (event.which == 33){
        $('#33').css('background-color', 'yellow');
   }
})

$(document).keyup(function(){
        $('#33').removeAttr('style');
   })