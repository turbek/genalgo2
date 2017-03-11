var _POPCOUNT = 1;
var _TIME = 0;
var POPMAX = 600;
var GENEMAX = 10000;
var MUTATION = 0.02;
var TIMEMAX = 1300;
var population;
var popcountHTML;

function setup(){
    createCanvas(500, 400);
    population = new Population(POPMAX, GENEMAX, MUTATION);
    population.generatePopulation();
    population.generateGenes();
    popcountHTML = createP();
}

function draw(){
    background(200);
    popcountHTML.html("Generation count: "+_POPCOUNT);
    population.run(_TIME);
    population.checkFitness();
    population.checkMaxX();
    population.drawBest();
    if(_TIME >= TIMEMAX){
        population.generateNewPopulation();
        _POPCOUNT++;
        _TIME = 0;
    }
    _TIME++;

}
