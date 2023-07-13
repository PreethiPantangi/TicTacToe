let clickCount = 0;
let p1Cells = [];
let p2Cells = [];

function getCell(cellID) {
    clickCount += 1;
    if(clickCount % 2 != 0) {
        // Player 1
        document.getElementById(cellID).innerHTML = "X";
        p1Cells.push(parseInt(cellID)%10);
        console.log(p1Cells);
    } else {
        // Player 2
        document.getElementById(cellID).innerHTML = "O";
        p2Cells.push(parseInt(cellID)%10);
        console.log(p2Cells);
    }
}

function startGame() {
    let player1 = document.getElementById('player1').value;
    let player2 = document.getElementById('player2').value;

    let instructions = document.getElementsByClassName('instructions')[0];
    instructions.style.display = 'none';

    let pdP1 = document.getElementsByClassName('pd-player1')[0];
    let pdP2 = document.getElementsByClassName('pd-player2')[0];

    pdP1.innerHTML = player1 + ' - ' + 'X';
    pdP2.innerHTML = player2 + ' - ' + 'O';

    let playerDetails = document.getElementsByClassName('player-details')[0];
    playerDetails.style.display = 'block';

    let board = document.getElementsByClassName('board')[0];
    if (board) {
        board.style.display = 'block';
    }
}