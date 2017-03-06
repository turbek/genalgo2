function Population(POPMAX, GENEMAX, MUTATION){
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

    this.lookForMate = function(parent1){
        while(true){
            var chromosome = this.population[Math.floor(random(POPMAX))];
            if(parent1 != chromosome){
                if(random(this.maxFitness) < chromosome.fitness){
                    return chromosome;
                }
            }
        }
    }


    this.generateNewPopulation = function(){
        var tempPop = [];
        for(var i = 0; i < POPMAX; i++){
            var parent1 = this.lookForMate();
            var parent2 = this.lookForMate(parent1);
            if(random(1) <= 0.5){
                var child = parent1.crossover(parent2);
            } else {
                var child = parent2.crossover(parent1);
            }
            child.mutate(MUTATION);
            tempPop[i] = child;
        }
        this.population = tempPop;
        console.log(this.population[0].genes.length)
        console.log("NEW POPULATION")
    }
}
