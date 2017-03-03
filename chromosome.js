function Chromosome(){

    this.x = 1;
    this.y = height/2;
    this.genes = [];
    this.fitness = 0;
    this.generateGenes = function(){
        var randomNum = Math.floor(random(4));
        if(randomNum === 0){
            this.x++;
        } else if (randomNum === 1 && this.x > 0){
            this.x--;
        } else if (randomNum === 2){
            this.y++;
        } else if (randomNum == 3 && this.y > 0){
            this.y--;
        }
        this.genes.push(randomNum);
    }

    // this.move = function(){
    //     for(var i = 0; i < this.genes.length; i++){
    //         var num = this.genes[i];
    //         if(num === 0){
    //             this.x++;
    //         } else if (num === 1 && this.x > 0){
    //             this.x--;
    //         } else if (num === 2){
    //             this.y++;
    //         } else if (num == 3 && this.y > 0){
    //             this.y--;
    //         }
    //     }
    // }

    this.display = function(){
        fill(100);
        rect(this.x, this.y, 2, 2);
    }
    this.checkFitness = function(maxFitness){
        var score = this.x;
        this.fitness = this.x / maxFitness;
    }
    this.crossover = function(partner){
        var child = new Chromosome();
        var pivot = Math.floor(random(this.genes.length));
        for(var i = 0; i < this.genes.length; i++){
            if(i > pivot) {
                child.genes[i] = this.genes[i];
            } else {
                child.genes[i] = partner.genes[i];
            }

        }
    }
    this.mutate = function(){

    }

};
