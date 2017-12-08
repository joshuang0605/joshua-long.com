/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

let scores, activePlayer, roundScore, dice, gamePlaying

init();

//add eventListener for roll the dice button to display the right dice number image and display its result
document.querySelector('.btn-roll').addEventListener('click', function(){
    if(gamePlaying) {
        //1. random number
        let dice = (Math.floor(Math.random() * 6) + 1)
    
        //2. update the dice image
        //bring back the dice image to BLOCK
        let diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block';
        diceDOM.src = 'dice-' + dice + '.png';

        //3.update the roundScore if the dice is not 1
        if (dice !== 1) {
            //add score
            roundScore += dice;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        } else {
            nextPlayer();
        }
    }
});

//Hold button
document.querySelector('.btn-hold').addEventListener('click', function() {
    if (gamePlaying) {
    //1. update current Score to round Score
    scores[activePlayer] += roundScore;

    //2. update the UI
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

    //Check if player won the game
    if (scores[activePlayer] >= 20) {
        document.querySelector('#name-' + activePlayer).textContent = 'Winner!'
        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
        gamePlaying = false;
    }   else {
            nextPlayer();
        }
    }
});
//newGame button
document.querySelector('.btn-new').addEventListener('click', init);

//nextplayer
function nextPlayer() {
    //NExt Player and reset score of previous player
    (activePlayer === 0) ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    //set user score to 0
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    //toggle active player
    document.querySelector('.player-0-panel').classList.toggle = 'active';
    document.querySelector('.player-1-panel').classList.toggle = 'active';
}

function init() {
    gamePlaying = true;
    scores = [0,0]
    activePlayer = 1;
    roundScore = 0;
    
    //Hide the dice image at the beginning of the game
    document.querySelector('.dice').style.display = 'none';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');

}