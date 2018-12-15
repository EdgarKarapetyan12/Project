var KendaniEak = require("./class.KendaniEak.js");
module.exports =  class Gishatich extends KendaniEak {
    constructor(x, y) {
        super(x, y);
        this.energy = 5;
        this.directions = [];
        this.index = 2;
    }

    yntrelVandak(ch) {
        this.stanalNorKordinatner();
        return super.yntrelVandak(ch);
    }
    utel() {
        if (this.energy > 18) {
            this.bazmanal();
        }
        
        var norVandak = this.yntrelVandak(4)
        var vandak4 = norVandak[Math.floor(Math.random) * norVandak.length];
        if (vandak4) {
            matrix[this.y][this.x] = 0;
            this.x = vandak4[0];
            this.y = vandak4[1];
            matrix[this.y][this.x] = 0
            this.mahanal();
            for (var i in sunkArr) {
                if (sunkArr[i].x == this.x && sunkArr[i].y == this.y) {
                    sunkArr.splice(i, 1);
                }
            }
            for (var i in xotakerArr) {
                if (xotakerArr[i].x == this.x && xotakerArr[i].y == this.y) {
                    xotakerArr.splice(i, 1);
                }
            }
        }
        else {
            var norVandak = this.yntrelVandak(1);
            var vandak1 = norVandak[Math.floor(Math.random) * norVandak.length];
            if (vandak1) {
                matrix[this.y][this.x] = 0;
                this.x = vandak1[0]
                this.y = vandak1[1]
                matrix[this.y][this.x] = 3;
                this.energy++;
                for (var i in grassArr) {
                    if (grassArr[i].x == this.x && grassArr[i].y == this.y) {
                        grassArr.splice(i, 1);
                    }
                }

            }
            else {
                this.sharjvel();
            }
        }
    }
    sharjvel() {

        var norVandak = this.yntrelVandak(0);
        var vandak0 = norVandak[Math.floor(Math.random) * norVandak.length];

        if (vandak0) {
            matrix[this.y][this.x] = 0;
            this.x = vandak0[0]
            this.y = vandak0[1]
            matrix[this.y][this.x] = 3;
            this.energy--;
            if (this.energy <= 0) {
                this.mahanal();
            }
        }
    }
    mahanal() {
        matrix[this.y][this.x] = 0;
        for (var i in gishatichArr) {
            if (gishatichArr[i].x == this.x && gishatichArr[i].y == this.y) {
                gishatichArr.splice(i, 1);
            }
        }
    }
    bazmanal() {
        this.energy = 5;
        var norVandak = this.yntrelVandak(0);
        var dir = norVandak[Math.floor(Math.random) * norVandak.length];
        if (dir) {
            var norGishatich = new Gishatich(dir[0], dir[1]);
            gishatichArr.push(norGishatich);
            matrix[dir[1]][dir[0]] = 3;
        }
        else {
            var norVandak = this.yntrelVandak(1);
            var dir = norVandak[Math.floor(Math.random) * norVandak.length];
            if (dir) {
                if (matrix[dir[1]][dir[0]] == 1) {
                    for (var i in grassArr) {
                        if (grassArr[i].x == dir[0] && grassArr[i].y == dir[1]) {
                            grassArr.splice(i, 1);
                        }
                    }
                }
                var norGishatich = new Gishatich(dir[0], dir[1]);
                gishatichArr.push(norGishatich);
                matrix[dir[1]][dir[0]] = 3;
            }
        }
    }
}
