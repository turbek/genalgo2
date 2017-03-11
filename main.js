var POPMAX = 600;
var POPCOUNT = 1;
var GENEMAX = 10000;
var MUTATION = 0.03;
var TIME = 0;
var TIMEMAX = 4000;
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
    popcountHTML.html("Generation count: "+POPCOUNT);
    population.run(TIME);
    population.checkFitness();
    population.checkMaxX();
    population.drawBest();
    if(mouseIsPressed){
        TIME = TIMEMAX;
    }
    if(TIME >= TIMEMAX){
        population.generateNewPopulation();
        POPCOUNT++;
        TIME = 0;
    }
    TIME++;

}
