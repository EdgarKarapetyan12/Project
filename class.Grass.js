var KendaniEak = require("./class.KendaniEak.js");

module.exports = class Grass extends KendaniEak {
    constructor(x, y) {
        super(x, y);
        this.multiply = 0
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];

    }

    bazmanal() {
        this.multiply++;
        var norVandak = this.yntrelVandak(0);
        var norVandak = norVandak[Math.floor(Math.random) * norVandak.length];
        if (this.multiply >= 4 && norVandak) {
            var norXot = new Grass(norVandak[0], norVandak[1]);
            grassArr.push(norXot);
            matrix[norVandak[1]][norVandak[0]] = 1;
            this.multiply = 0;
        }
    }
}