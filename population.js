function Population(POPMAX, GENEMAX){
    this.maxFitness = 0;
    this.population = [];

    this.generatePopulation = function(){
        for(var i = 0; i < POPMAX; i++){
            this.population.push(new Chromosome(GENEMAX));
        }
    }

    this.checkFitness = function(){
        for(var i = 0; i < POPMAX; i++){
            this.population[i].checkFitness();
            var fitness = this.population[i].fitness;
            if(fitness > this.maxFitness){
                this.maxFitness = fitness;
            }
        }
    }

    this.run = function(time){
        for(var i = 0; i < POPMAX; i++){
            this.population[i].move(time);
            this.population[i].display();
        }
    }

    this.generateGenes = function(){
        for(var i = 0; i < POPMAX; i++){
            this.population[i].generateGenes();
        }
    }

    this.lookForMate = function(){
        while(true){
            var chromosome = this.population[Math.floor(random(POPMAX))];
            if(random(this.maxFitness) < chromosome.fitness){
                return chromosome;
            }
        }
    }


    this.generateNewPopulation = function(){
        var tempPop = [];
        for(var i = 0; i < POPMAX; i++){
            var parent1 = this.lookForMate();
            var parent2 = this.lookForMate();
            var child = parent1.crossover(parent2);
            tempPop[i] = child;
        }
        this.population = tempPop;
        console.log("NEW POPULATION")
    }
}
