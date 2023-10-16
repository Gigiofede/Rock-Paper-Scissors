const computerSelection = getComputerChoice(); 
const playerSelection = window.prompt('Insert your choice');



function playRound(playerSelection, computerSelection) {

    function game(playRound){
        for( playRound = 0; playRound < 5; playRound ++){
    
    if (playerSelection === 'Rock', 'ROCK', 'RocK' && computerSelection === 'Scissors'){
       return 'You win! Rock beat Scissors'  ;
    } else if (playerSelection === 'Paper', 'PAPER', 'PapeR' && computerSelection === 'Rock') {
        return 'You win! Paper beat Rock';
    } else if (playerSelection === 'Scissors', 'ScissorS', 'SCISSORS' && computerSelection === 'Paper') {
        return 'You win! Scissors beat Paper';
    } else if (playerSelection === 'Paper', 'PAPER', 'PapeR' && computerSelection === 'Scissors') {
        return 'You lose! Scissors beat Paper';
    } else if (playerSelection === 'Scissors', 'ScissorS', 'SCISSORS' && computerSelection === 'Rock') {
        return 'You lose! Rock beat Scissors';
    } else if (playerSelection === 'Rock', 'ROCK', 'RocK' && computerSelection === 'Paper') {
        return 'You lose! Paper beat Rock';
    } else {
        return 'Even!';
    }
        }
}
}


