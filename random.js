var w;

function setup(){
    createCanvas(600, 400);
    noStroke();
    w = new Walker();
}

function draw(){
    background(255);
    fill(100);
    w.display();
    w.walk();

}

function Walker(){
    this.x = width/2;
    this.y = height/2;

    this.walk = function() {
        var randomNum = Math.floor(random(4));
        if(randomNum === 0){
            this.x+=1;
        } else if (randomNum === 1){
            this.x-=1;
        } else if (randomNum === 2){
            this.y+=1;
        } else {
            this.y-=1;
        }
    };

    this.display = function(){
        rect(this.x, this.y, 5, 5)
    };
}
