var counter = 0;
var previousNum = 0;

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
        return false;
    } else if ((guessNum > (targetNum + 30)) || (guessNum < (targetNum - 30))) {
        $('h2#feedback').text('Cold');
        console.log('cold');
        return false;
    } else if ((guessNum > (targetNum + 20)) || (guessNum < (targetNum - 20))) {
        $('h2#feedback').text('Warm');
        console.log('warm');
        return false;
    } else if ((guessNum > (targetNum + 10)) || (guessNum < (targetNum - 10))) {
        $('h2#feedback').text('Hot');
        console.log('hot');
        return false;
    } else if ((guessNum > (targetNum + 1)) || (guessNum < (targetNum - 1))) {
        $('h2#feedback').text('Very Hot');
        console.log('very hot');
        return false;
    } else if (guessNum == targetNum) {
        $('h2#feedback').text('You Won');
        console.log('You won');
        return false;
    }

}

function getCloser(targetNum, guessNum, previousNum) {
    var prevDiff = parseInt(Math.abs(targetNum - previousNum));
    var guessDiff = parseInt(Math.abs(targetNum - guessNum));

    //$('h2#feedback').remove('p');
    console.log('prevDiff:' + prevDiff);
    console.log('guessDiff:' + guessDiff);
    if (guessNum == targetNum) {
        $('#cars').text('');
        return false;
    }
    if (counter == 0) {
        return false;
    }

    // if ((guessDiff) == 1 || (prevDiff == 1)){
    //      $('h2#feedback').remove('p');
    // }

    if (prevDiff > guessDiff) {
       // $('h2#feedback').remove('p');
        console.log('warmer');
       // $('h2#feedback').append("<p>, and getting warmer</p>");
       $('#cars').text('getting warmer...');
       return false;

    } else if (prevDiff < guessDiff) {
        //$('h2#feedback').remove('p');
        console.log('colder');
        //$('h2#feedback').append("<p>, and getting colder</p>");
        $('#cars').text('getting colder...');
        return false;

    } else if (prevDiff == guessDiff) {
       // $('h2#feedback').remove('p');
        //$('h2#feedback').append("<p>(not warmer or colder)</p>");
        $('#cars').text('not warmer or colder');
        console.log('same');
        return false;

    }



}


// var add = (function() {
//     var counter = 0;
//     return function() {
//         return counter += 1;
//     }
// })();
function countUp() {
    counter++;
    $('#count').text(counter);
}


$(document).ready(function() {
    var targetNum = startGame();
    console.log(targetNum);
    //on clicking #guessbutton, save the number entered by the player

    $("#guessButton").click(function() {
        //$('h2#feedback').remove('p');
        var guessNum = $('#userGuess').val();

        validateNumber(guessNum);
        // if (counter == 0) {


        //     compare(targetNum, guessNum);
        //     console.log('counter 1');

        // }

        compare(targetNum, guessNum);
console.log('one');
        getCloser(targetNum, guessNum, previousNum);
        countUp();
        console.log('two');
        previousNum = guessNum;



        // var guessNum = $('#userGuess').val();
        // validateNumber(guessNum);
        // compare(targetNum, guessNum);
        // countUp();
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
//hello
