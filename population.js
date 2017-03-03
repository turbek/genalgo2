function Population(POPMAX){
    this.popMax = POPMAX;
    this.maxFitness = 1;
    this.population = [];
    this.matingpool = [];

    this.generatePopulation = function(){
        for(var i = 0; i <= this.popMax; i++){
            this.population.push(new Chromosome());
        }
    }

    this.checkFitness = function(){
        for(var i = 0; i < this.population.length; i++){
            var fitness = this.population[i].checkFitness(this.maxFitness);
            if(fitness > this.maxFitness){
                this.maxFitness = fitness;
                console.log("NEW MAX FITNESS:"+fitness+" chromosome:"+this.population[i].genes)
            }
        }
    }

    this.generateGenes = function(){
        for(var i = 0; i <= this.popMax; i++){
            this.population[i].generateGenes();
        }
    }

    this.movePopulation = function(){
        for(var i = 0; i <= this.popMax; i++){
            this.population[i].move();
        }
    }

    this.displayPopulation = function(){
        for(var i = 0; i <= this.popMax; i++){
            this.population[i].display();
        }
    }

    this.matingPool = function(){
        for(var i = 0; i <= this.popMax; i++){
            var matenum = this.population[i].fitness / this.maxFitness * 100;
            for(var j = 0; j < Math.floor(matenum); j++){
                this.matingpool.push(this.population[i]);
            }

        }
    }

    this.generateNewPopulation = function(){
        for(var i = 0; i <= this.popMax; i++){
            var parent1 = this.matingpool[Math.floor(random(this.popMax))];
            var parent2 = this.matingpool[Math.floor(random(this.popMax))];
            var child = parent1.crossover(parent2);
            // this.population[i] = child;
        }
    }


}
