function Chromosome(GENEMAX){
    this.x = 1;
    this.y = height/2;
    this.genes = [];
    this.fitness = 0;

    this.generateGenes = function(){
        for(var i = 0; i < GENEMAX; i++){
            var randomNum = Math.floor(random(4));
            this.genes.push(randomNum);
        }
    }

    this.move = function(i){
        var num = this.genes[i];
        if(num === 0){
            this.x+=2;
        } else if (num === 1 && this.x > 0){
            this.x-=2;
        } else if (num === 2){
            this.y+=2;
        } else if (num == 3 && this.y > 0){
            this.y-=2;
        }
    }

    this.display = function(){
        fill(100);
        rect(this.x, this.y, 2, 2);
    }

    this.checkFitness = function(){
        var score = this.x;
        this.fitness = this.x / width;
    }

    this.crossover = function(partner){
        var child = new Chromosome(GENEMAX);
        var pivot = Math.floor(random(GENEMAX));
        for(var i = 0; i < GENEMAX; i++){
            if(i > pivot) {
                child.genes[i] = this.genes[i];
            } else {
                child.genes[i] = partner.genes[i];
            }
        }
        return child;
    }

    this.mutate = function(mutation){
        for(var i = 0; i < GENEMAX; i++){
            var r = random(1);
            if(random(1)<=mutation){
                this.genes[i] = Math.floor(random(4));
            }
        }
    }

};
