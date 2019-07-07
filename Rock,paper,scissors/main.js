const choices = document.querySelectorAll('.choice');
const score = document.querySelector('#score');
const result = document.querySelector('#result');
const restart = document.querySelector('#restart');
const overlay = document.querySelector('.overlay');


const scoreBoard = {
	player: 0,
	computer: 0
}


//play game
function play(e) {
	restart.style.display = 'inline-block';
	const playerChoice = e.target.id;
	const computerChoice = getComputerChoice();
	const winner = getWinner(playerChoice,computerChoice);
	showWinner(winner,computerChoice);
}

//comp choice
function getComputerChoice() {
	const randomNumber = Math.random();
	if(randomNumber < .34) {
		return 'rock'
	} else if(randomNumber <= .67) {
		return 'paper'
	} else {
		return 'scissors';
	}
}

//getWinner
function getWinner(p,c) {
	if( p === c) {
		return 'draw';
	} else if( p === 'rock') {
		if(c === 'paper') {
			return 'computer'
		} else {
			return 'player'
		}
	} else if( p === 'paper') {
		if(c === 'scissors') {
			return 'computer'
		} else {
			return 'player';
		}
	} else if( p === 'scissors') {
		if(c === 'rock') {
			return 'computer'
		} else {
			return 'player'
		}
	}
}

//showWinner
function showWinner(winner,computerChoice) {
	if(winner === 'player') {
		scoreBoard.player++;
		result.innerHTML = `
		<h1 class='text-win'>You win</h1>
		<i class='fas fa-hand-${computerChoice} fa-10x'></i>
		<p>Computer chose <strong>${computerChoice}</strong></p>
		`;
	} else if( winner === 'computer') {
		scoreBoard.computer++;
		result.innerHTML = `
		<h1 class='text-lose'>You lose</h1>
		<i class='fas fa-hand-${computerChoice} fa-10x'></i>
		<p>Computer chose <strong>${computerChoice}</strong></p>
		`;
	} else {
		result.innerHTML = `
		<h1>Draw</h1>
		<i class='fas fa-hand-${computerChoice}' fa-10x></i>
		<p>Computer chose <strong>${computerChoice}</strong></p>
		`;
	}

	//show score
	score.innerHTML = `<p>Player:${scoreBoard.player}</p>
						<p>Computer:${scoreBoard.computer}</p>`;


	overlay.style.display= 'block';
}

function restartGame() {
	scoreBoard.player = 0;
	scoreBoard.computer = 0;
	score.innerHTML = `
	<p>Player: 0</p>
	<p>Computer: 0 </p>
	`
}


function clearOverlay(e) {
	if(e.target == overlay) {
		overlay.style.display = 'none';
	}
}

//Event listeners
choices.forEach( choice => choice.addEventListener('click',play));
window.addEventListener('click',clearOverlay)
restart.addEventListener('click',restartGame);
