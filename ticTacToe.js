let board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
];

let players = ['X', 'O'];

let currentPlayer;
function setup(){
    createCanvas(400, 400);
    if (random(1) < 0.5) {
    currentPlayer = player1;
} else {

}

function draw() {
    background (220);
    let w = width / 3;
    let h = height / 3;

    for (let j = 0; j < 3; j++) {
        for (let i = 0; i < 3; i++) {
            let x = w * i + w/2;
            let y = h * j + h/2;
            let spot = board [i][j];
            textSize(32);
            strokeWeight(4);
            if (spot == player2) {
                noFill();
                ellipse(x,y,w/2);
            }else if  (spot == player1){
                let xr = w/4;
                line (x - xr, y - xr, x + xr, y + xr);
                line (x + xr, y - xr, x - xr, y + xr);
            }
            
        }
    } 
}