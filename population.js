function Population(POPMAX, GENEMAX){
    this.maxFitness = 0;
    this.population = [];
    this.matingpool = [];

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
                console.log("NEW MAX FITNESS:"+fitness+" chromosome:"+this.population[i].genes)
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

    this.matingPool = function(){
        this.matingpool = [];
        for(var i = 0; i < POPMAX; i++){
            console.log("matingpool length: "+this.matingpool.length);
            if(this.population[i].fitness < random(this.maxFitness)){
                console.log("siker");
                this.matingpool.push(this.population[i]);
            } else if(i > 0){
                i--;
            }
            console.log("i: "+i);
        }
    }
    

    // this.matingPool = function(){
    //     this.matingpool = [];
    //     for(var i = 0; i < POPMAX; i++){
    //         if(this.checkForMating(this.population[i]) == null){
    //
    //         }
    //     }
    // }

    // this.matingPool = function(){
    //     this.matingpool = [];
    //     for(var i = 0; i < POPMAX; i++){
    //         var poolcount = this.population[i].fitness / this.maxFitness * 100;
    //         for(var i = 0; i <= Math.floor(poolcount); i++){
    //             this.matingpool.push(this.population[i]);
    //         }
    //     }
    // }

    this.generateNewPopulation = function(){
        for(var i = 0; i < POPMAX; i++){
            var parent1 = this.matingpool[Math.floor(random(this.matingpool.length))];
            var parent2 = this.matingpool[Math.floor(random(this.matingpool.length))];
            var child = parent1.crossover(parent2);
            console.log(child);
            this.population[i] = child;
        }
        console.log(this.population);
    }
}
