document.getElementById('startButton').addEventListener('click', startGame);
document.getElementById('playAgainButton').addEventListener('click', resetGame);
document.getElementById('playAgainButtonLose').addEventListener('click', resetGame);

let timer;
let countdownTimer;
let timeLeft = 30;
let squaresRemaining;

function startGame() {
    
    clearTimeout(timer);
    clearInterval(countdownTimer);
    document.getElementById('game-area').innerHTML = '';
    document.getElementById('message').textContent = '';
    document.getElementById('countdown').textContent = `Time left: 30s`;
    document.getElementById('win-overlay').style.display = 'none'; 
    document.getElementById('lose-overlay').style.display = 'none'; 
    timeLeft = 30;

    const numSquaresInput = document.getElementById('numSquares').value;
    const numSquares = parseInt(numSquaresInput);

    if (isNaN(numSquares) || numSquares <= 0) {
        document.getElementById('message').textContent = 'Please enter a valid number of squares!';
        return;
    }

    const squareColor = document.getElementById('color').value;
    
    squaresRemaining = numSquares;
    
    for (var i = 0; i < numSquares; i++) {
        const square = document.createElement('div');
        square.className = 'square';
        square.style.backgroundColor = squareColor;
        square.addEventListener('click', removeSquare);
        square.style.left = Math.random() * (400 - 55) + "px";
        square.style.top = Math.random() * (400 - 55) + "px";
        document.getElementById('game-area').appendChild(square);
    }

    countdownTimer = setInterval(() => {
        timeLeft--;
        document.getElementById('countdown').textContent = `Time left: ${timeLeft}s`;

        if (timeLeft <= 0) {
            clearInterval(countdownTimer);
            showLoseOverlay();
        }
    }, 1000);

    timer = setTimeout(() => {
        if (squaresRemaining > 0) {
            showLoseOverlay();
        }
    }, 30000);
}

function removeSquare() {
    this.remove();
    squaresRemaining--;
    
    if (squaresRemaining === 0) {
        clearTimeout(timer);
        clearInterval(countdownTimer);
        document.getElementById('message').textContent = 'You win!';
        document.getElementById('message').classList.add('win');
        showWinOverlay();
    }
}

function showWinOverlay() {
    document.getElementById('win-overlay').style.display = 'flex';
}

function showLoseOverlay() {
    clearTimeout(timer);
    clearInterval(countdownTimer);
    document.getElementById('lose-overlay').style.display = 'flex';
}

//Reset game
function resetGame() {
    document.getElementById('win-overlay').style.display = 'none'; 
    document.getElementById('lose-overlay').style.display = 'none';
    document.getElementById('game-area').innerHTML = '';
    document.getElementById('message').textContent = '';
    document.getElementById('countdown').textContent = 'Time left: 30s';
    clearTimeout(timer);
    clearInterval(countdownTimer);
    timeLeft = 30;
    squaresRemaining = 0;
}
