var KendaniEak = require("./class.KendaniEak.js");
module.exports = class Xotaker extends KendaniEak {
    constructor(x, y) {
        super(x, y);
        this.energy = 5;
        this.directions = [];
        this.index = 2;
    }
    utel() {
        if (exanak == 'dzmer') {
            if (this.x == Mlenght && this.y == 0) {
                this.mahanal();

            }
            else {
                var norvandak = [this.x + 1, this.y - 1];
                if (matrix[norvandak[1]] && matrix[norvandak[1]][norvandak[0]] && matrix[norvandak[1]][norvandak[0]] < 2) {
                    matrix[this.y][this.x] = 0;
                    this.x = norvandak[0];
                    this.y = norvandak[1];
                }
                else {
                    norvandak = [this.x + 1, this.y];
                    if (matrix[norvandak[1]] && matrix[norvandak[1]][norvandak[0]] && matrix[norvandak[1]][norvandak[0]] < 2) {
                        matrix[this.y][this.x] = 0;
                        this.x = norvandak[0];
                        this.y = norvandak[1];
                    }
                    else {
                        norvandak = [this.x, this.y - 1];
                        if (matrix[norvandak[1]] && matrix[norvandak[1]][norvandak[0]] && matrix[norvandak[1]][norvandak[0]] < 2) {
                            matrix[this.y][this.x] = 0;
                            this.x = norvandak[0];
                            this.y = norvandak[1];
                        }
                    }
                }
            }
            if (matrix[this.y][this.x] == 1) {
                for (var i in grassArr) {
                    if (grassArr[i].x == this.x && grassArr[i].y == this.y) {
                        grassArr.splice(i, 1);
                        break;
                    }
                }
            }
            matrix[this.y][this.x] = 2;
        }
        else {
            if (this.energy > 10) {
                this.bazmanal();
            }
            if (this.energy > 10) {
                this.bazmanal();
            }
            if (4 * xotakerArr.length > grassArr.length) {
                this.energy -= 2
            }
            var arr = this.yntrelVandak(1);
            var vandak1 = arr[Math.floor(Math.random() * arr.length)];
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
                var arr = this.yntrelVandak(4);
                var vandak4 = arr[Math.floor(Math.random() * arr.length)];
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
    }
    sharjvel() {
        var arr = this.yntrelVandak(0);
        var vandak0 = arr[Math.floor(Math.random() * arr.length)];
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
        var arr = this.yntrelVandak(0);
        var dir = arr[Math.floor(Math.random() * arr.length)];
        xotakerQanakStat++;
        if (dir) {
            var norXotaker = new Xotaker(dir[0], dir[1]);
            xotakerArr.push(norXotaker);
            matrix[dir[1]][dir[0]] = 2;
        }
        else {
            var arr = this.yntrelVandak(1);
            var dir = arr[Math.floor(Math.random() * arr.length)];
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