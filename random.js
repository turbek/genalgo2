var w;

function setup(){
    createCanvas(600, 400);
    background(255);
    w = new Walker();
}

function draw(){
    w.display();
    w.walk();
}

function Walker(){
    this.x = width/2;
    this.y = height/2;

    this.walk = function() {
        var randomNum = Math.floor(random(4));
        if(randomNum === 0){
            this.x++;
        } else if (randomNum === 1){
            this.x--;
        } else if (randomNum === 2){
            this.y++;
        } else {
            this.y--;
        }
    };

    this.display = function(){
        fill(255,0,0);
        rect(this.x, this.y, 2, 2);
    };
}
