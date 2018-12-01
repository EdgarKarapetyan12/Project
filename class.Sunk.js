class Sunk extends KendaniEak {
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
        var norVandak = random(this.yntrelVandak(1));
        if (this.multiply >= 8 && norVandak) {
            var norsunk = new Sunk(norVandak[0], norVandak[1]);
            sunkArr.push(norsunk);
            matrix[norVandak[1]][norVandak[0]] = 4;
            this.multiply = 0;
        }
    }
}
