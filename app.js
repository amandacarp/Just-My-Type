//only have lowercase keyboard appear when page loads
$(document).ready(function () {
    $('#keyboard-upper-container').hide();
});

//when shift is pressed- hide lowercase, show uppercase
$(document).keydown(function (event) {
    var whichKey = event.which
    if (whichKey == 16) {
        $('#keyboard-lower-container').hide();
        $('#keyboard-upper-container').show();
    }
});

//when shift is lifted -reverse
$(document).keyup(function (event) {
    var whichKey = event.which
    if (whichKey == 16) {
        $('#keyboard-lower-container').show();
        $('#keyboard-upper-container').hide();
    }
});

//display each sentence at top of page
let sentences = ['ten ate neite ate nee enet ite ate inet ent eate', 'Too ato too nOt enot one totA not anot tOO aNot', 'oat itain oat tain nate eate tea anne inant nean', 'itant eate anot eat nato inate eat anot tain eat', 'nee ene ate ite tent tiet ent ine ene ete ene ate'];
let sentenceIdx = 0;
let letterIdx = 0;

$('#sentence').append(sentences[sentenceIdx])
$('#target-letter').append(sentences[sentenceIdx][letterIdx]);

//when each button is pressed- highlight 
$(document).keypress(function (e) {
    $("#" + e.which).addClass('highlight')

//if user keyboard input matches letter in sentence, show check mark
    if (e.which == sentences[sentenceIdx].charCodeAt(letterIdx)){
        $('#feedback').append('<span class= "glyphicon glyphicon-ok"> </span> ')
        $('#target-letter').hide(sentences[sentenceIdx][letterIdx]);
        letterIdx++
    } else {
        $('#feedback').append('<span class= "glyphicon glyphicon-remove"> </span> ')
    
}});

$(document).keyup(function () {
    $(".highlight").removeClass('highlight')
});


