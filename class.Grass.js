var KendaniEak = require("./class.KendaniEak.js");

module.exports = class Grass extends KendaniEak {
    constructor(x, y) {
        super(x, y);
        this.multiply = 0
       

    }

    bazmanal() {
        this.multiply++;
        var arr = this.yntrelVandak(0);
        var norVandak = arr[Math.floor(Math.random() * arr.length)];
        if (this.multiply >= 4 && norVandak) {
            var norXot = new Grass(norVandak[0], norVandak[1]);
            grassArr.push(norXot);
            matrix[norVandak[1]][norVandak[0]] = 1;
            this.multiply = 0;
        }
    }
}