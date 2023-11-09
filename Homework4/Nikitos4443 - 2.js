class Vector {
    constructor(coordinates) {
        this.coord = coordinates;
    }

    equals(b){
        for (let i = 0; i < this.coord.length; i++)
            if(this.coord[i] !== b.coord[i])
                return "The Vectors are not equal"
        return "The Vectors are equal";
    }
    add(b) {
        if (this.coord.length !== b.coord.length) {
            throw Error("Vectors must have the same length");
        }

        let vector = [];
        for (let i = 0; i < this.coord.length; i++)
            vector.push(this.coord[i] + b.coord[i]);
        return new Vector(vector);
    }
    subtract(b){
        if (this.coord.length !== b.coord.length) {
            throw Error("Vectors must have the same length");
        }

        let vector = []
        for (let i = 0; i < this.coord.length; i++)
            vector.push(this.coord[i] - b.coord[i]);
        return new Vector(vector);
    }
    dot(b){
        if (this.coord.length !== b.coord.length) {
            throw Error("Vectors must have the same length");
        }
        let sum = 0;
        for(let i = 0; i<this.coord.length; i++)
            sum += this.coord[i] * b.coord[i]
        return sum;
    }

    norm(){
        let norm = 0
        for (let i = 0; i < this.coord.length; i++)
            norm += this.coord[i]**2
        return Math.sqrt(norm);
    }

    toString(){
        return '(' + this.coord.join(',') + ')'
    }
}

let a = new Vector([1, 2, 3]);
let b = new Vector([1, 2, 3]);
// console.log(a.equals(b))
// console.log(a.add(b))
// console.log(a.subtract(b))
// console.log(a.dot(b))
// console.log(a.norm());
