var counter = 0;
function randomNumber() {
    //make a random number
    var numRand = Math.floor(Math.random() * 101);
    console.log(numRand);
    return numRand;
}

function startGame() {
    //get a random number
    var hotNumber = randomNumber();
    console.log(hotNumber);
    return hotNumber;
}

function validateNumber(guessedNumber) {
    if (guessedNumber % 1 !== 0) {
        alert('You must enter an integer value!!');
        $('#userGuess').val('');
        return false;
    } else {
        storeNumber(guessedNumber)
    }

}

function storeNumber(guessedNumber) {
    //get the value of the input box
    console.log(guessedNumber);
    $("#guessList").append('<li>' + guessedNumber + '</li>');

}

//compare the number guessed to the random number and display a result in h2#feedback
function compare(targetNum, guessNum) {
    if ((guessNum > (targetNum + 50)) || (guessNum < (targetNum - 50))) {
        $('h2#feedback').text('Ice Cold');
        console.log('ice cold');
    } else if ((guessNum > (targetNum + 30)) || (guessNum < (targetNum - 30))) {
        $('h2#feedback').text('Cold');
        console.log('cold');
    } else if ((guessNum > (targetNum + 20)) || (guessNum < (targetNum - 20))) {
        $('h2#feedback').text('Warm');
        console.log('warm');
    } else if ((guessNum > (targetNum + 10)) || (guessNum < (targetNum - 10))) {
        $('h2#feedback').text('Hot');
        console.log('hot');
    } else if ((guessNum > (targetNum + 1)) || (guessNum < (targetNum - 1))) {
        $('h2#feedback').text('Very Hot');
        console.log('very hot');
    } else if (guessNum == targetNum) {
        $('h2#feedback').text('You Won');
        console.log('You won');
    }
}


// var add = (function() {
//     var counter = 0;
//     return function() {
//         return counter += 1;
//     }
// })();
function countUp(){
    counter++;
    $('#count').text(counter);
}


$(document).ready(function() {
    var targetNum = startGame();

    //on clicking #guessbutton, save the number entered by the player
    $("#guessButton").click(function() {

        var guessNum = $('#userGuess').val();
        validateNumber(guessNum);
        compare(targetNum, guessNum);
        countUp();
        //$('#count').text(add());
    });
    //on clicking #guessbutton, save the number entered by the player
    $("a.new").click(function() {
        newGame();
    });



    /*--- Display information modal box ---*/
    $(".what").click(function() {
        $(".overlay").fadeIn(1000);

    });

    /*--- Hide information modal box ---*/
    $("a.close").click(function() {
        $(".overlay").fadeOut(1000);
    });

    function newGame() {
        console.log('new game');
        //reset everything back to zero
        document.location.reload(true);
    }

});