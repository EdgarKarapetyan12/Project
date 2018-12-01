class Gishatich extends KendaniEak {
    constructor(x, y, ser) {
        super(x, y);
        this.energy = 5;
        this.directions = [];
        this.index = 2;
        if (ser == 0) {
            this.ser = 'arakan';
        }
        else {
            this.ser = 'igakan';
        }
    }

    yntrelVandak(ch) {
        this.stanalNorKordinatner();
        return super.yntrelVandak(ch);
    }
    utel() {
        if (this.ser == 'arakan' && xotakerArr.length > gishatichArr.length) {
            var vandak35 = this.yntrelVandak(3.5);
            if (vandak35) {
                this.bazmanal();

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
            for (var i in xotakerArr) {
                if (xotakerArr[i].x == this.x && xotakerArr[i].y == this.y) {
                    xotakerArr.splice(i, 1);
                }
            }
        }
        else {
            var vandak1 = random(this.yntrelVandak(1));
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


        var vandak0 = random(this.yntrelVandak(0));

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
        var dir = random(this.yntrelVandak(0));
        if (dir) {
            var norGishatich = new Gishatich(dir[0], dir[1]);
            gishatichArr.push(norGishatich);
            matrix[dir[1]][dir[0]] = 3;
        }
        else {
            var dir = random(this.yntrelVandak(1));
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