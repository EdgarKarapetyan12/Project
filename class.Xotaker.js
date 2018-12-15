var KendaniEak = require("./class.KendaniEak.js");
module.exports =  class Xotaker extends KendaniEak {
    constructor(x, y) {
        super(x, y);
        this.energy = 5;
        this.directions = [];
        this.index = 2;
    }
    utel() {
        if (this.energy > 10) {
            this.bazmanal();
        }
        if (4 * xotakerArr.length > grassArr.length) {
            this.energy -= 2
        }
        var norVandak = this.yntrelVandak(1)
        var vandak1 = norVandak[Math.floor(Math.random) * norVandak.length]

        if (vandak1) {
            matrix[this.y][this.x] = 0;
            this.x = vandak1[0]
            this.y = vandak1[1]
            matrix[this.y][this.x] = 2;
            this.energy++;
            for (var i in grassArr) {
                if (grassArr[i].x == this.x && grassArr[i].y == this.y) {
                    grassArr.splice(i, 1);
                }
            }
            var vandak4 = random(this.yntrelVandak(4));
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
            }
        }
        else {
            this.sharjvel();
        }

    }
    sharjvel() {


        var vandak0 = random(this.yntrelVandak(0));

        if (vandak0) {
            matrix[this.y][this.x] = 0;
            this.x = vandak0[0]
            this.y = vandak0[1]
            matrix[this.y][this.x] = 2;
            this.energy--;
            if (this.energy <= 0) {
                this.mahanal();
            }
        }
    }
    mahanal() {
        matrix[this.y][this.x] = 0;
        for (var i in xotakerArr) {
            if (xotakerArr[i].x == this.x && xotakerArr[i].y == this.y) {
                xotakerArr.splice(i, 1);
            }
        }
    }
    bazmanal() {
        this.energy = 8;
        this.stanalNorKordinatner();
        var dir = random(this.yntrelVandak(0));
        if (dir) {
            var norXotaker = new Xotaker(dir[0], dir[1]);
            xotakerArr.push(norXotaker);
            matrix[dir[1]][dir[0]] = 2;
        }
        else {
            var dir = random(this.yntrelVandak(1));
            if (dir) {
                for (var i in grassArr) {
                    if (grassArr[i].x == dir[0] && grassArr[i].y == dir[1]) {
                        grassArr.splice(i, 1);
                    }
                }
                var norXotaker = new Xotaker(dir[0], dir[1]);
                xotakerArr.push(norXotaker);
                matrix[dir[1]][dir[0]] = 2;
            }
        }
    }

}