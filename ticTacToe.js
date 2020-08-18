let board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
];

let player1 = 'X';
let player2 = 'O';

function setup(){
    createCanvas(400, 400);
}

function draw() {
    background (220);
    let w = width / 3;
    let h = height / 3;

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            let x = w * i + w/2;
            let y = h * j + h/2;
            let spot = board [i][j];
            textSize(32);
            if (spot == player2) {
                noFill();
                ellipseMode(CORNER);
                ellipse(x,y,w);
            }else if  (spot == player1){
                let xr = w/4;
                line (x - xr, y - xr, x + xr, y + xr);
                line (x + xr, y - xr, x - xr, y + xr);
            }
            
        }
    } 
}