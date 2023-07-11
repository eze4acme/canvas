const canvas = document.querySelector('canvas')

canvas.width = window.innerWidth
canvas.height = window.innerHeight
canvas.style.backgroundColor = 'blue'

const c = canvas.getContext('2d')
setInterval(() => {
const rand = Math.random() * window.innerWidth
let x = rand
c.fillRect(x += 10, rand, 200, 200)
}, 100)




















// let circleX = 100
//  function setup() {
//     createCanvas(600, 600)
//     background(0)
    // createElement('h1', 'love p5js')
    // print('hello')
// }
// function mousePressed() {
//     circleX = 0
// }

// function draw() {
//     background(0);
//     noStroke();
//     fill(255)
//     random(300, 300)
//     rect(circleX, 200, 100, 200)
//     circleX += 5
// }

// let squareSize;
// let lineWidth ;

// function draw() {
//     background(100);
//     rectMode(CENTER);
//     strokeWeight(random(50, 100))
//     stroke(0, 0, 255)
//     fill(0,255,0)
//     square(200, 150, random(200, 8))
// }

// function draw() {
//     noStroke()
//     const time =   setInterval(()=>{
//      fill(random(100, 255), random(200), random(50, 150), 100);
//         circle(random(600), random(700), 30)
//         clearInterval(time)
//     }, 100)

// }
// function draw() {
//     noStroke()
//     fill(255)
//     circle(mouseX, mouseY, 15)
// }
// function mousePressed() {
//     background(0)
// }