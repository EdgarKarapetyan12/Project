var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.use(express.static("."));
app.get('/', function (req, res) {
    res.redirect('index.html');
});
server.listen(3000);



function RandInt(min, max) {
    var z = Math.floor(Math.random() * (max - min + 1)) + min;
    return z;
}

var Grass = require("./class.Grass.js");
var Xotaker = require("./class.Xotaker.js");
var Gishatich = require("./class.Gishatich.js");
var Sunk = require("./class.Sunk.js");
var Vozni = require("./class.Vozni.js");
 matrix = [];
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


 grassArr = [];
 xotakerArr = [];
 gishatichArr = [];
 sunkArr = [];
 vozniArr = [];



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
            sunkArr.push(new Sunk(x, y));
        }
        else if (matrix[y][x] == 5) {
            vozniArr.push(new Vozni(x, y));
        }
    }
}

function drawServerayin() {
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

setInterval(drawServerayin, 1000);

socket.emit("matrix",matrix)