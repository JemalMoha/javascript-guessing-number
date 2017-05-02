var target;
var guessInputText;
var guessInput;
var finished = false;
var guesses = 0;


function doGame() {

    var randonNumber = Math.random() * 100;
    var randonNumberInteger = Math.floor(randonNumber);
    target = randonNumberInteger + 1;

    while (!finished) {
        guessInputText = prompt('I am thinking of a number' +
                                'in the range 1 to 100. \n\n'+
                                'Guess the number?');

        guessInput = parseInt(guessInputText);
        guesses++;
        finished = checkGuess();

    }
}

function checkGuess() {

    if(isNaN(guessInput)) {
        alert('You have not entered a number.\n\n'+
              'Please enter a number between the range of 1 to 100.');

        return false;
    }
    if((guessInput < 1) || (guessInput > 100)) {
        alert('Please enter an enteger number between the range 1 to 100.');
        return false;
    }
    if(guessInput > target) {
        alert('Your number is too large!');
        return false;
    }
    if(guessInput < target) {
        alert('Your number is too small!');
        return false;
    }
    alert('You got it! The number was '+ target +
          '.\n\nIt took you ' + guesses + 
          ' guesses to a get the number!');
    return true;
}
doGame();