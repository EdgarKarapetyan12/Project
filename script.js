
function RandInt(min, max) {
    var z = Math.floor(Math.random() * (max - min + 1)) + min;
    return z;
}
var matrix = [];
var n = 50;
var m = 50;

for (var i = 0; i <= n; ++i) {
    matrix[i] = [];
}
for (var y = 0; y <= n; y++) {
    for (var x = 0; x <= m; x++) {
        matrix[y][x] = 0;
    }
}
var tokos1 = 50;
var tokos2 = 3;
var tokos3 = 2;
var tokos4 = 4;
var tokos5 = 1;

var qanak1 = n * m * tokos1 / 100;
var qanak2 = n * m * tokos2 / 100;
var qanak3 = n * m * tokos3 / 100;
var qanak4 = n * m * tokos4 / 100;
var qanak5 = n * m * tokos5 / 100;

for (var z = 0; z < qanak1; ++z) {
    var rx = RandInt(0, m);
    var ry = RandInt(0, n);
    matrix[ry][rx] = 1;
}
for (var z = 0; z < qanak2; ++z) {
    var rx = RandInt(0, m);
    var ry = RandInt(0, n);
    matrix[ry][rx] = 2;
}
for (var z = 0; z < qanak3; ++z) {
    var rx = RandInt(0, m);
    var ry = RandInt(0, n);
    matrix[ry][rx] = 3;
}
for (var z = 0; z < qanak4; ++z) {
    var rx = RandInt(0, m);
    var ry = RandInt(0, n);
    matrix[ry][rx] = 4;
}
for (var z = 0; z < qanak5; ++z) {
    var rx = RandInt(0, m);
    var ry = RandInt(0, n);
    matrix[ry][rx] = 5;
}

var side = 10;
var grassArr = [];
var xotakerArr = [];
var gishatichArr = [];
var sunkArr = [];
var vozniArr = [];

function setup() {

    frameRate(8);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');
    noStroke();

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                grassArr.push(new Grass(x, y));
            }
            else if (matrix[y][x] == 2) {
                xotakerArr.push(new Xotaker(x, y));
            }
            else if (matrix[y][x] == 3) {
                gishatichArr.push(new Gishatich(x, y));
            }
            else if (matrix[y][x] == 4) {
                sunkArr.push(new sunk(x, y));
            }
            else if (matrix[y][x] == 5) {
                vozniArr.push(new vozni(x, y));
            }
        }
    }
}
function draw() {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 0) {
                fill("#acacac");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 1) {
                fill("green");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 2) {
                fill("yellow");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 3) {
                fill("black");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 4) {
                fill("#999966");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 5) {
                fill("#996600");
                rect(x * side, y * side, side, side);
            }

        }
    }
    for (var i in grassArr) {
        grassArr[i].bazmanal();

    }
    for (var i in xotakerArr) {
        xotakerArr[i].utel();
    }
    for (var i in gishatichArr) {
        gishatichArr[i].utel();
    }
    for (var i in sunkArr) {
        sunkArr[i].bazmanal();
    }
    for (var i in vozniArr) {
        vozniArr[i].utel();
    }
}


