


let circleX = 100
 function setup() {
    createCanvas(600, 600)
    // createElement('h1', 'love p5js')
    // print('hello')
}
function mousePressed() {
    circleX = 0
}

function draw() {
    background(0);
    noStroke();
    fill(255)
    rect(circleX, 200, 100, 200)
    circleX = circleX + 10
}
