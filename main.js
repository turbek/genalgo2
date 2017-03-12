var _POPCOUNT = 1;
var _TIME = 0;
var POPMAX = 600;
var MUTATION = 0.02;
var TIMEMAX = 1500;
var GENEMAX = TIMEMAX;
var population;
var popcountHTML;
var maxFitnessHTML;

function setup(){
    createCanvas(500, 400);
    population = new Population(POPMAX, GENEMAX, MUTATION);
    population.generatePopulation();
    population.generateGenes();
    popcountHTML = createP();
    maxFitnessHTML = createP();
}

function draw(){
    background(245);
    if (population.finished === true){
        popcountHTML.html("Algorithm finished at: generation "+_POPCOUNT+"!");
    }
    else if (population.finished === false){
        popcountHTML.html("Generation count: "+_POPCOUNT);
        maxFitnessHTML.html("Maximum fitness: "+population.returnFitness()+"%");
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

}
