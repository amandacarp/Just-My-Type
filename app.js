//set necessary variables
let sentences = ['ten ate neite ate nee enet ite ate inet ent eate', 'Too ato too nOt enot one totA not anot tOO aNot', 'oat itain oat tain nate eate tea anne inant nean', 'itant eate anot eat nato inate eat anot tain eat', 'nee ene ate ite tent tiet ent ine ene ete ene ate'];
let sentenceIdx = 0;
let letterIdx = 0;
let currentSentence = sentences[sentenceIdx];
let currentLetter = currentSentence[letterIdx];
let mistakes = 0;
let gameStarted = false;
let startTime;
let numOfWords = 0;

for (let i=0; i < sentences.length; i++) {
    numOfWords += sentences[i].split(' ').length;
}

//only have lowercase keyboard appear when page loads
$('#keyboard-upper-container').hide();

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

$(document).keyup(function (e) {
    //remove highlight with keyup
    $(".highlight").removeClass('highlight')
    //when shift is lifted -reverse
    var whichKey = e.which
    if (whichKey == 16) {
        $('#keyboard-lower-container').show();
        $('#keyboard-upper-container').hide();
    }
});

$(document).keypress(function (e) {
    //start game with first user keypress
    if (gameStarted === false){
    gameStarted = true;
    startTime = Date.now();
}

//when each button is pressed- highlight 
$("#" + e.which).addClass('highlight')

//if user keyboard input matches letter in sentence, show check mark
if (e.which == currentSentence.charCodeAt(letterIdx)) {
    $('#feedback').append('<span class= "glyphicon glyphicon-ok"> </span> ')
    //and increment and change target letter on screen
    letterIdx++;
    currentLetter = currentSentence[letterIdx];
    $('#target-letter').text(currentLetter);

    //move yellow block as correct keys are pressed
    $('#yellow-block').css('margin-left', '+=17.5px');
    //if user input does not match letter in sentence, show X mark       
} else {
    $('#feedback').append('<span class= "glyphicon glyphicon-remove"> </span> ')
    //count how many mistakes user makes
    mistakes++
};
//increment and change target sentence on screen
if (letterIdx == currentSentence.length) {
    sentenceIdx++;

    //end game if run out of sentences
    if (sentenceIdx == sentences.length) {
        let endTime = Date.now();
        let totalMinutes = (endTime - startTime) / 1000 / 60;
        let wordsPerMinute = (numOfWords / totalMinutes )- (2 * mistakes);
        $('#feedback').text('You scored ' + Math.floor(wordsPerMinute) + ' words per minute');
        setTimeout(function () {
            if (confirm('Would you like to play again?')) {
                // reset game if confirm play again
                sentenceIdx = 0;
                letterIdx = 0;
                currentSentence = sentences[sentenceIdx];
                currentLetter = currentSentence[letterIdx];
                $('#sentence').text(currentSentence);
                $('#target-letter').text(currentLetter);
                $('#feedback').empty();
                $('#yellow-block').css('margin-left', '0px');
            }
        }, 2000);
        //if you have more sentences show next sent in array
    } else {
        currentSentence = sentences[sentenceIdx];
        $('#sentence').text(currentSentence);
        //remove all check marks or x's on page
        $('#feedback').empty()
        //return yellow block to beginning of sentence
        $('#yellow-block').css('margin-left', '0px')
        //display first letter of new sentence
        letterIdx = 0;
        currentLetter = currentSentence.charAt(letterIdx);
        $('#target-letter').text(currentLetter);
    }
};

});
