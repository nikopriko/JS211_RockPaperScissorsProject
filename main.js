// uses strict mode so strings are not coerced, variables are not hoisted, etc... 
'use strict';

// brings in the assert module for unit testing
const assert = require('assert');
// brings in the readline module to access the command line
const readline = require('readline');
// use the readline module to print out to the command line
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});



// the function that will be called by the unit test below
const rockPaperScissors = (hand1, hand2) => {
let Hand1 = hand1.toLowerCase().trim();
let Hand2 = hand2.toLowerCase().trim();

const compareHands = (Hand1,Hand2) => {
  if ((Hand1 === 'rock') && (Hand2 === 'paper'))  {
    return "Hand two wins!";
  }
  else if ((Hand1 === 'rock') && (Hand2 === 'scissors'))  {
    return "Hand one wins!";
  }
  else if ((Hand1 === 'paper') && (Hand2 === 'rock'))  {
    return "Hand one wins!";
}
else if ((Hand1 === 'paper') && (Hand2 === 'scissors'))  {
  return "Hand two wins!";
}
else if ((Hand1 === 'scissors') && (Hand2 === 'paper'))  {
  return "Hand one wins!";
}
else if ((Hand1 === 'scissors') && (Hand2 === 'rock'))  {
  return "Hand two wins!";
}
}
  

  if ((Hand1 !== 'rock') &&
      (Hand1 !== 'paper') && 
      (Hand1 !== 'scissors')) {
      return "Invalid entry 1";
    }
    else if ((Hand2 !== 'rock') &&
             (Hand2 !== 'paper') && 
             (Hand2 !== 'scissors'))  {
      return "Invalid entry 2";
    }
    else if (Hand1 === Hand2) {
      return "It's a tie!";
      }
    else {
      return compareHands(Hand1, Hand2);
    }
  
    
  
  // ((Hand1 || Hand2) === 'paper') ||
  // ((Hand1 || Hand2) === 'scissors'))
//  {
//     return "valid";
//     }
//     else {}

  // let Hand1 = hand1.trim().toLowerCase();
  // let Hand2 = hand2.trim().toLowerCase();

  // const whoWins = (Hand1, Hand2) =>{
  //     // rock > scissors
  //     // scissors > paper
  //     // paper > rock

      // if (hand1 === hand2) {
      //   return "It is a tie";
      // }

      //else if ()
  }

  // Write code here
  // Use the unit test to see what is expected



// the first function called in the program to get an input from the user
// to run the function use the command: node main.js
// to close it ctrl + C
function getPrompt() {
  rl.question('hand1: ', (answer1) => {
    rl.question('hand2: ', (answer2) => {
      console.log( rockPaperScissors(answer1, answer2) );
      getPrompt();
    });
  });
}

// Unit Tests
// to use them run the command: npm test main.js
// to close them ctrl + C
if (typeof describe === 'function') {

  // most are notes for human eyes to read, but essentially passes in inputs then compares if the function you built returns the expected output.
  describe('#rockPaperScissors()', () => {
    it('should detect a tie', () => {
      assert.equal(rockPaperScissors('rock', 'rock'), "It's a tie!");
      assert.equal(rockPaperScissors('paper', 'paper'), "It's a tie!");
      assert.equal(rockPaperScissors('scissors', 'scissors'), "It's a tie!");
    });
    it('should detect which hand won', () => {
      assert.equal(rockPaperScissors('rock', 'paper'), "Hand two wins!");
      assert.equal(rockPaperScissors('paper', 'scissors'), "Hand two wins!");
      assert.equal(rockPaperScissors('rock', 'scissors'), "Hand one wins!");
    });
    it('should scrub input to ensure lowercase with "trim"ed whitepace', () => {
      assert.equal(rockPaperScissors('rock', ' paper '), "Hand two wins!");
      assert.equal(rockPaperScissors('paper', 'scissors'), "Hand two wins!");
      assert.equal(rockPaperScissors('rock ', 'scissors'), "Hand one wins!");
    });
  });
} else {

  // always returns ask the user for another input
  getPrompt();

}

