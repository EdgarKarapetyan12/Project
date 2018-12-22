var KendaniEak = require("./class.KendaniEak.js");
module.exports = class Vozni extends KendaniEak {
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
        var arr = this.yntrelVandak(4);
        var vandak4 = arr[Math.floor(Math.random() * arr.length)];
        if (vandak4) {
            matrix[this.y][this.x] = 0;
            this.x = vandak4[0];
            this.y = vandak4[1];
            matrix[this.y][this.x] = 5
            this.energy++
            for (var i in sunkArr) {
                if (sunkArr[i].x == this.x && sunkArr[i].y == this.y) {
                    sunkArr.splice(i, 1);
                }
            }

        }
        else {
            var arr = this.yntrelVandak(1);
            var vandak1 = arr[Math.floor(Math.random() * arr.length)];
            if (vandak1) {
                matrix[this.y][this.x] = 0;
                this.x = vandak1[0]
                this.y = vandak1[1]
                matrix[this.y][this.x] = 5;
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
        var arr = this.yntrelVandak(0);
        var vandak0 = arr[Math.floor(Math.random() * arr.length)];
        if (vandak0) {
            matrix[this.y][this.x] = 0;
            this.x = vandak0[0]
            this.y = vandak0[1]
            matrix[this.y][this.x] = 5;
            this.energy--;
            if (this.energy <= 0) {
                this.mahanal();
            }
        }
    }
    mahanal() {
        matrix[this.y][this.x] = 0;
        for (var i in vozniArr) {
            if (vozniArr[i].x == this.x && vozniArr[i].y == this.y) {
                vozniArr.splice(i, 1);
            }
        }
    }
    bazmanal() {
        this.energy = 5;
        var arr = this.yntrelVandak(0);
        var dir = arr[Math.floor(Math.random() * arr.length)];
        vozniQanakStat++;
        if (dir) {
            var norvozni = new Vozni(dir[0], dir[1]);
            vozniArr.push(norvozni);
            matrix[dir[1]][dir[0]] = 5;
        }
        else {
            var arr = this.yntrelVandak(1);
            var dir = arr[Math.floor(Math.random() * arr.length)];
            if (dir) {
                if (matrix[dir[1]][dir[0]] == 1) {
                    for (var i in grassArr) {
                        if (grassArr[i].x == dir[0] && grassArr[i].y == dir[1]) {
                            grassArr.splice(i, 1);
                        }
                    }
                }
                var norvozni = new Vozni(dir[0], dir[1]);
                vozniArr.push(norvozni);
                matrix[dir[1]][dir[0]] = 5;
            }
        }
    }
}
