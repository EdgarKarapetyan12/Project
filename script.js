var socket = io();
var n = 50;
var m = 50;
var side = 10;
var grasscolor;
var h1 = document.getElementById("exanak");

function setup() {
    frameRate(8);
    createCanvas(n * side, m * side);
    background('#acacac');
    noStroke();


}

function drawMatrix(matrix) {
    
    if (exanak == 'amar') {
        frameRate(11);
    }
    else if (exanak == 'dzmer') {
        frameRate(3);
    }
    else {
        frameRate(5);
    }

    if (exanak == 'garun') {
        grasscolor = '#00cc66';
    }
    else if (exanak == 'amar') {
        grasscolor = '#00cc00';
    }
    else if (exanak == 'ashun') {
        grasscolor = '#317e02';
    }
    else if (exanak == 'dzmer') {
        grasscolor = '#b5e3c8';
    }
    
   // h1.innerText = exanak;

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 0) {
                fill("#acacac");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 1) {
                fill(grasscolor);
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
}
socket.on("matrix", drawMatrix)