var POPMAX = 100;
var POPCOUNT = 1;
var GENEMAX = 10000;
var TIME = 0;
var population;

function setup(){
    createCanvas(600, 400);
    population = new Population(POPMAX, GENEMAX);
    population.generatePopulation();
    population.generateGenes();
}

function draw(){
    background(200);
    population.run(TIME);
    population.checkFitness();
    if(TIME >= 100*POPCOUNT){
        population.generateNewPopulation();
        POPCOUNT++;
        TIME = 0;
    }
    TIME++;
}
