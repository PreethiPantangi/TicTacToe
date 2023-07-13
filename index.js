let clickCount = 0;
let player1, player2, instructions, playerDetails, board;
let player1Moves = [];
let player2Moves = [];
let winningCombinations = [
    [11,12,13],
    [21,22,23],
    [31,32,33],
    [11,22,33],
    [13,22,31],
    [11,21,31],
    [12,22,32],
    [13,23,33]
]

function checkWin() {
    for (let i = 0; i < winningCombinations.length; i++) {
        let [a, b, c] = winningCombinations[i];
        if (
            document.getElementById(a).innerHTML === 'X' && 
            document.getElementById(b).innerHTML === 'X' && 
            document.getElementById(c).innerHTML === 'X'
        ) {
            announceWinner(player1);
        } else if (
            document.getElementById(a).innerHTML === 'O' && 
            document.getElementById(b).innerHTML === 'O' && 
            document.getElementById(c).innerHTML === 'O'
        ){
            announceWinner(player2);
        } else {
            clickCount == 9 && announceWinner();
        }
    }
}

function resetGame() {
    instructions.style.display = 'block';
    playerDetails.style.display = 'none';
    board.style.display = 'none';
    let cells = [11,12,13,21,22,23,31,32,33];
    cells.forEach((cell) => {
        document.getElementById(cell).innerHTML = "&nbsp";
    });
    clickCount = 0;
}

function announceWinner(player) {
    if(player) {
        alert(player + " is the winner!");
    } else {
        alert("It's a tie")
    }
    resetGame();
}

function getCell(cellID) {
    clickCount += 1;
    if(clickCount % 2 != 0) {
        // Player 1
        document.getElementById(cellID).innerHTML = "X";
        checkWin();
    } else {
        // Player 2
        document.getElementById(cellID).innerHTML = "O";
        checkWin();
    }
}

function startGame() {
    player1 = document.getElementById('player1').value;
    player2 = document.getElementById('player2').value;

    instructions = document.getElementsByClassName('instructions')[0];
    instructions.style.display = 'none';

    let pdP1 = document.getElementsByClassName('pd-player1')[0];
    let pdP2 = document.getElementsByClassName('pd-player2')[0];

    pdP1.innerHTML = player1 + ' - ' + 'X';
    pdP2.innerHTML = player2 + ' - ' + 'O';

    playerDetails = document.getElementsByClassName('player-details')[0];
    playerDetails.style.display = 'block';

    board = document.getElementsByClassName('board')[0];
    if (board) {
        board.style.display = 'block';
    }
}