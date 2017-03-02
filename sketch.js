var x = 0;

function setup() {
    createCanvas(600,400);
    noStroke();
}

function draw() {
    background(200);
    fill(100);
    rect(0+x, height/2, 30, 5);
    x++
}
