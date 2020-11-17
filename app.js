//only have lowercase keyboard appear when page loads
$(document).ready(function () {
    $('#keyboard-upper-container').hide();
});

//set necessary variables
let sentences = ['ten ate neite ate nee enet ite ate inet ent eate', 'Too ato too nOt enot one totA not anot tOO aNot', 'oat itain oat tain nate eate tea anne inant nean', 'itant eate anot eat nato inate eat anot tain eat', 'nee ene ate ite tent tiet ent ine ene ete ene ate'];
let sentenceIdx = 0;
let letterIdx = 0;
let currentSentence = sentences[sentenceIdx];
let currentLetter = currentSentence[letterIdx];

//display each sent and expected letter at top of page
$('#sentence').text(currentSentence)
$('#target-letter').text(currentLetter);

//when shift is pressed- hide lowercase, show uppercase
$(document).keydown(function (event) {
    var whichKey = event.which
    if (whichKey == 16) {
        $('#keyboard-lower-container').hide();
        $('#keyboard-upper-container').show();
    }
});

//when shift is lifted -reverse
$(document).keyup(function (e) {
    $(".highlight").removeClass('highlight')
    var whichKey = e.which
    if (whichKey == 16) {
        $('#keyboard-lower-container').show();
        $('#keyboard-upper-container').hide();
    }
});

//when each button is pressed- highlight 
$(document).keypress(function (e) {
    $("#" + e.which).addClass('highlight')

//if user keyboard input matches letter in sentence, show check mark
    if (e.which == currentSentence.charCodeAt(letterIdx)) {
        $('#feedback').append('<span class= "glyphicon glyphicon-ok"> </span> ')
//change target letter on screen
        letterIdx++
        currentLetter = currentSentence[letterIdx];
        $('#target-letter').text(currentLetter);
//if user input does not match letter in sentence, show X mark       
    } else {
        $('#feedback').append('<span class= "glyphicon glyphicon-remove"> </span> ')
    }
//change target sentence on screen
    if (letterIdx == currentSentence.length) {
        $('span.glyphicon').remove()
        sentenceIdx++
        currentSentence = sentences[sentenceIdx];
        $('#sentence').text(currentSentence);
    }

});

