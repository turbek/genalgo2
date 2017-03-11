var POPMAX = 600;
var POPCOUNT = 1;
var GENEMAX = 10000;
var MUTATION = 0.02;
var TIME = 0;
var TIMEMAX = 1000;
var population;

function setup(){
    createCanvas(600, 400);
    population = new Population(POPMAX, GENEMAX, MUTATION);
    population.generatePopulation();
    population.generateGenes();
}

function draw(){
    background(200);
    population.run(TIME);
    population.checkFitness();
    if(TIME >= TIMEMAX){
        population.generateNewPopulation();
        POPCOUNT++;
        console.log(TIME);
        TIME = 0;
    }
    TIME++;
}
