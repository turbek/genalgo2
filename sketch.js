var x = 0;
var y = 0;


function setup() {
    createCanvas(600,400);
    noStroke();
}

function draw() {
    background(200);
    fill(100);
    rect(x, y, 30, 5);
    x+=random(5);
    y+=random(5);
}
