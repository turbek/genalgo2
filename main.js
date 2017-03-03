var POPMAX = 100;
var timer = 0;
var population;

function setup(){
    createCanvas(600, 400);
    population = new Population(POPMAX);
    population.generatePopulation();
}

function draw(){
    background(200);
    population.displayPopulation();
    population.movePopulation();
    population.checkFitness();
    population.matingPool();
    population.generateNewPopulation();
}
