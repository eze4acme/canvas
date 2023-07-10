function setup() {
    createCanvas(window.innerWidth, window.innerHeight)
    createElement('h1', 'love p5js')
    print('hello')
}

function draw() {
    background(100, 0, 200);
    rectMode(CENTER);
    strokeWeight(60)
    fill(100, 100, 100, 125)
    rect(100, 100, 100, 100, 50);
    // triangle(30, 75, 58, 20, 86, 75);
}
console.log('hi');