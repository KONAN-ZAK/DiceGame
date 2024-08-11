'use strict';
///// my way 1 :///////////////////

// //the game Demo: https://pig-game-v2.netlify.app/
// //variables Declaration for DOM :
// const finalScore0 = document.getElementById('score--0');
// const finalScore1 = document.getElementById('score--1');
// const currentScore0 = document.getElementById('current--0');
// const currentScore1 = document.getElementById('current--1');
// const holdscsore = document.querySelector('.btn--hold');
// const activeModePlayer0 = document.querySelector('.player--0');
// const activeModePlayer1 = document.querySelector('.player--1');
// const diceImg = document.querySelector('.dice');
// const name = document.querySelector('.name--0 ');

// //declring the varaibales
// let FinalCalc, currentCalc, player, runTheGame;
// //init func..
// const init = () => {
//   finalScore0.textContent = 0;
//   finalScore1.textContent = 0;
//   FinalCalc = [0, 0]; //great penifit from having the array.
//   currentCalc = 0;
//   player = 0;
//   runTheGame = true;
//   diceImg.classList.add('hidden');
// };
// init();
// //function to swhich the player
// const switchPlayer = function () {
//   // move to another player
//   // reset the cuurent value to 0
//   currentCalc = 0;
//   document.getElementById(`current--${player}`).textContent = currentCalc;
//   player = player === 0 ? 1 : 0;
//   //active the css mode
//   activeModePlayer0.classList.toggle('player--active');
//   activeModePlayer1.classList.toggle('player--active');
// };

// // functoin on click to add record and and switch
// document.querySelector('.btn--roll').addEventListener('click', () => {
//   if (runTheGame) {
//     //if we define random number out of function it would stay for only one value
//     //if we define it inside func it will generate new one on each click..
//     const randomDice = Math.floor(Math.random() * 6) + 1;
//     diceImg.classList.remove('hidden');
//     diceImg.src = `dice-${randomDice}.png`;

//     if (randomDice !== 1) {
//       // continue with same player.....
//       // add his value to current value
//       currentCalc += randomDice;
//       document.getElementById(`current--${player}`).textContent = currentCalc;
//     } else {
//       // move to another player
//       // reset the cuurent value to 0
//       //active the css mode
//       switchPlayer();
//     }
//   }
// });

//Holding button functionality.
// holdscsore.addEventListener('click', function () {
//   if (runTheGame) {
//     FinalCalc[player] += currentCalc;
//     document.getElementById(`score--${player}`).textContent = FinalCalc[player];
//     currentCalc = 0;
//     document.getElementById(`current--${player}`).textContent = currentCalc;
//     // check for winner if any.
//     if (FinalCalc[player] >= 20) {
//       document
//         .querySelector(`.player--${player}`)
//         .classList.add('player--winner');
//       document
//         .getElementById(`name--${player}`)
//         .classList.add('player--winner');
//       runTheGame = false;
//     } else {
//       switchPlayer();
//     }
//   }
// });
// //start again button
// document.querySelector('.btn--new').addEventListener('click', function () {
//   document
//     .querySelector(`.player--${player}`)
//     .classList.remove('player--winner');
//   document.getElementById(`name--${player}`).classList.remove('player--winner');
//   currentCalc = 0;
//   document.getElementById(`current--${player}`).textContent = currentCalc;
//   init();
// });

///// my way 2 :///////////////////
// init the values
let playerNo = 0,
  currentSum = 0,
  scoreValue = [0, 0],
  checker = true;

const scoreEL0 = document.getElementById('score--0');
const scoreEL1 = document.getElementById('score--1');
const dice = document.querySelector('.dice');

scoreEL0.textContent = 0;
scoreEL1.textContent = 0;
dice.classList.add('hidden');

//Roll Dice button
document.querySelector('.btn--roll').addEventListener('click', function () {
  if (checker) {
    dice.classList.remove('hidden');
    const randomNum = Math.floor(Math.random() * 6 + 1);
    const cuurentValue = document.getElementById(`current--${playerNo}`);
    dice.src = `dice-${randomNum}.png`;
    if (randomNum !== 1) {
      // get the sum of rolls and display it !
      currentSum += randomNum;
      cuurentValue.textContent = currentSum;
    } else {
      //change the player
      cuurentValue.textContent = 0;
      playerNo = playerNo === 0 ? 1 : 0;
      currentSum = 0;
      document.querySelector(`.player--1`).classList.toggle('player--active');
      document.querySelector(`.player--0`).classList.toggle('player--active');
    }
  }
});

// Hold the Score button
document.querySelector('.btn--hold').addEventListener('click', () => {
  if (checker) {
    scoreValue[playerNo] += currentSum;
    document.getElementById(`score--${playerNo}`).textContent =
      scoreValue[playerNo];
    //check winner:
    if (scoreValue[playerNo] >= 100) {
      checker = false;
      document
        .querySelector(`.player--${playerNo}`)
        .classList.add('player--winner');
    } else {
      currentSum = 0;
      document.getElementById(`current--${playerNo}`).textContent = currentSum;
      playerNo = playerNo === 0 ? 1 : 0;
      document.querySelector('.player--1').classList.toggle('player--active');
      document.querySelector('.player--0').classList.toggle('player--active');
    }
  }
});

// reset the game :
document.querySelector('.btn--new').addEventListener('click', function () {
  document
    .querySelector(`.player--${playerNo}`)
    .classList.remove('player--winner');
  document.getElementById(`current--${playerNo}`).textContent = 0;
  playerNo = 0;
  currentSum = 0;
  scoreValue = [0, 0];
  checker = true;
  scoreEL0.textContent = 0;
  scoreEL1.textContent = 0;
  dice.classList.add('hidden');
});

/////////////////////the Teacher way :////////////////////////////////
// 'use strict';

// // Selecting elements
// const player0El = document.querySelector('.player--0');
// const player1El = document.querySelector('.player--1');
// const score0El = document.querySelector('#score--0');
// const score1El = document.getElementById('score--1');
// const current0El = document.getElementById('current--0');
// const current1El = document.getElementById('current--1');

// const diceEl = document.querySelector('.dice');
// const btnNew = document.querySelector('.btn--new');
// const btnRoll = document.querySelector('.btn--roll');
// const btnHold = document.querySelector('.btn--hold');

// let scores, currentScore, activePlayer, playing;

// // Starting conditions
// const init = function () {
//   scores = [0, 0];
//   currentScore = 0;
//   activePlayer = 0;
//   playing = true;

//   score0El.textContent = 0;
//   score1El.textContent = 0;
//   current0El.textContent = 0;
//   current1El.textContent = 0;

//   diceEl.classList.add('hidden');
//   player0El.classList.remove('player--winner');
//   player1El.classList.remove('player--winner');
//   player0El.classList.add('player--active');
//   player1El.classList.remove('player--active');
// };
// init();

// const switchPlayer = function () {
//   document.getElementById(`current--${activePlayer}`).textContent = 0;
//   currentScore = 0;
//   activePlayer = activePlayer === 0 ? 1 : 0;
//   player0El.classList.toggle('player--active');
//   player1El.classList.toggle('player--active');
// };

// // Rolling dice functionality
// btnRoll.addEventListener('click', function () {
//   if (playing) {
//     // 1. Generating a random dice roll
//     const dice = Math.trunc(Math.random() * 6) + 1;

//     // 2. Display dice
//     diceEl.classList.remove('hidden');
//     diceEl.src = `dice-${dice}.png`;

//     // 3. Check for rolled 1
//     if (dice !== 1) {
//       // Add dice to current score
//       currentScore += dice;
//       document.getElementById(`current--${activePlayer}`).textContent =
//         currentScore;
//     } else {
//       // Switch to next player
//       switchPlayer();
//     }
//   }
// });

// btnHold.addEventListener('click', function () {
//   if (playing) {
//     // 1. Add current score to active player's score
//     scores[activePlayer] += currentScore;
//     // scores[1] = scores[1] + currentScore

//     document.getElementById(`score--${activePlayer}`).textContent =
//       scores[activePlayer];

//     // 2. Check if player's score is >= 100
//     if (scores[activePlayer] >= 100) {
//       // Finish the game
//       playing = false;
//       diceEl.classList.add('hidden');

//       document
//         .querySelector(`.player--${activePlayer}`)
//         .classList.add('player--winner');
//       document
//         .querySelector(`.player--${activePlayer}`)
//         .classList.remove('player--active');
//     } else {
//       // Switch to the next player
//       switchPlayer();
//     }
//   }
// });

// btnNew.addEventListener('click', init);
