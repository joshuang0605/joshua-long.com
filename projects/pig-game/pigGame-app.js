//set up variables
let scores, activePlayer, roundScore, gamePlaying, winningScore

init();

//ROLL DICE button
document.querySelector('.btn-roll').addEventListener('click', function() {

    //run game if game state is true
    if (gamePlaying) {
        //generate a random number
        let dice = Math.floor((Math.random() * 6) + 1);
    
        //update the dice image number with the random number
        let diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block'
        diceDOM.src = 'pig-game/img/dice-' + dice + '.png';
    
        //update roundScore if dice is not 1
        if (dice !== 1) {
            roundScore += dice;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        } else {
            //next Player
            nextPlayer();
        } //else
    }
}); //roll button

//Hold button
document.querySelector('.btn-hold').addEventListener('click', function() {
    if (gamePlaying) {

        //add score to Global score
        scores[activePlayer] += roundScore;
    
        //update the UI
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
    
        //check if player won the game
        let input = document.querySelector('.final-score').value;
        winningScore = input;
        if (scores[activePlayer] >= winningScore) {
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('#name-' + activePlayer).textContent = "WINNER!";
            gamePlaying = false;
        } else {
            //next player
            nextPlayer();
        }
    }
});

//new game button
document.querySelector('.btn-new').addEventListener('click', init);

//next player function
function nextPlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    //update current score back to 0
    document.querySelector('#current-0').textContent = '0';
    document.querySelector('#current-1').textContent = '0';

    //toggle active class of next player
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    //hide the diceDOM when changing to next player
    document.querySelector('.dice').style.display = 'none';
};

//init function
function init() {
    scores = [0, 0];
    activePlayer = 0;
    roundScore = 0;
    gamePlaying = true;
    winningScore = 100;
    
    //set score in the beginning of Game to 0
    document.querySelector('.dice').style.display = 'none';
    document.querySelector('#score-0').textContent = '0';
    document.querySelector('#score-1').textContent = '0';
    document.querySelector('#current-0').textContent = '0';
    document.querySelector('#current-1').textContent = '0';
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('#name-0').textContent = 'PLAYER 1';
    document.querySelector('#name-1').textContent = 'PLAYER 2';
}