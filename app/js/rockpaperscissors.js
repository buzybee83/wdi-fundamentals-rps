////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
	return move || getInput();
	// Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    return move;
}

function getComputerMove(move) {
	return move || randomPlay();
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return move;
}

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    /* YOUR CODE HERE */
    var playerMove = getPlayerMove();
    var computerMove = getComputerMove();
   
    if (playerMove === computerMove) {
	    winner = "Tie";
    } else if (playerMove === "rock"){
    	if (computerMove === "scissors"){
	    	winner = "Player";
    	}else {
	    	winner = "Computer";
    	}
    } else if (playerMove === "paper"){
	    if (computerMove === "rock") {
		    winner = "Player";
	    }else {
		    winner = "Computer";
	    }
    } else if (playerMove === "scissors"){
        if (computerMove === "paper"){
             winner = "Player";
        }else {
             winner = "Computer";

	    }
   return winner;
    } 
  console.log(winner);

}
getWinner();


function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
    return [playerWins, computerWins];
}




    if (choice1 === choice2) {
        return "The result is a a tie!";
    }else if (choice1 === "rock")
    {
        if (choice2 ==="scissors"){
            return "Rock wins!";
        }
        else {
           return "Paper wins!"; 
        }
    }else if (choice1 === "paper") {
        if (choice2 === "rock") {
            return "Paper wins!";
        }else {
            return "Scissors wins!";
        }
    }
    
};
