/**
 * Edited by steph on 11/2/2016.
 */
// Create an Object to hold our program code and data
var hilo = {
    minimum: 1,
    maximum: 100,
    tries: 7,
    answer: 0,//we'll change that autoamtically in the code
    message: {
        win: "You won! Good guessing!! Reload the page to try again.",
        lose1: "Sorry; that was your last guess. The number was ",
        lose2: ". You were pretty close. Reload the page to try again.",
        high: "Your guess is too high. ",
        low: "Your guess is too low. ",
        correct: "That's the number!",
        tooHigh: "That's over the max. (that guess didn't count)",
        tooLow: "That's below the min. (that guess didn't count)",
        noMoreTries: "You are out of guesses. Reload the page to try again."
    },
    setup: function () { // set up the page and start the game
        // this will set hilo.answer to a random value from the minimum up through the maximum.
        hilo.answer = Math.floor(Math.random() * (hilo.maximum - hilo.minimum + 1)) + hilo.minimum;
        document.getElementById("minimum").innerHTML = hilo.minimum;
        // Lab step 4
        document.getElementById("maximum").innerHTML = hilo.maximum;
        // Lab step 4
        document.getElementById("tries").innerHTML = hilo.tries;
        // Lab step 5
        document.getElementById("guessButton").onclick = hilo.guess;
        // Lab step 13 (save for later)
        document.getElementById("guessForm").onsubmit = function() {
            hilo.guess();
            return false;
        };
        // Lab step 13
        // Lab step 13
    },
    writeMessage: function (theMessage) {
        document.getElementById('messages').innerHTML =
             document.getElementById('messages').innerHTML +
             "<p>" + theMessage + "</p>"; // Lab step 6
    },
    guess: function () { // most of our code is here
        var myMessage; //just declare it for now; this value is found only in the function
        // retrieve the input value and force it to be a number by subtracting 0.
        var number = document.getElementById('guessNumber').value - 0;
        // first check if we're out of tries; if so, pick that message.
        var countIt = true;
        if (hilo.tries < 1) {
            myMessage = hilo.message.noMoreTries;
        }
        // or maybe the user guessed the answer? If so, display that message.
        else if (number == hilo.answer) {
            // Lab step 7
            myMessage = hilo.message.win;
        }
        else {// oh well; didn't win. A few possibilities remain:
            // was the guess to low?
            if(number > hilo.maximum){
                //a check for if the guess is out of range and then don't count that guess.
                myMessage = hilo.message.tooHigh;
                countIt = false;
            }else if(number < hilo.minimum){
                myMessage = hilo.message.tooLow;
                countIt = false;
            }else if (number < hilo.answer /* Lab step 8 */ ) {
                // Lab step 9
                //show what the guess was after too high or too low
                myMessage = hilo.message.low+ " Guess was " + number + ".";
            }
            // if it wasn't too low, we already know it wasn't correct,
            // so it must be too high.
            else {
                myMessage = hilo.message.high+ " Guess was " + number + ".";
            }
            // Was this the last guess?
            if (hilo.tries == 1) {
                myMessage = myMessage + " " + hilo.message.lose1 + hilo.answer + hilo.message.lose2;
            }
        } // else not the answer
        // always decrement the number of tries
        if(countIt){hilo.tries = hilo.tries - 1;}
        //display tries remaining.
        document.getElementById("tries").innerHTML = hilo.tries;
        // always respond with a message
        hilo.writeMessage(myMessage);
    } // guess
}; // hilo