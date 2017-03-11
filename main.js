var POPMAX = 600;
var POPCOUNT = 1;
var GENEMAX = 10000;
var MUTATION = 0.02;
var TIME = 0;
var TIMEMAX = 2000;
var population;

function setup(){
    createCanvas(500, 400);
    population = new Population(POPMAX, GENEMAX, MUTATION);
    population.generatePopulation();
    population.generateGenes();
}

function draw(){
    background(200);
    population.run(TIME);
    population.checkFitness();
    population.checkMaxX();
    population.drawBest();
    if(TIME >= TIMEMAX){
        population.generateNewPopulation();
        POPCOUNT++;
        TIME = 0;
    }
    TIME++;
}
