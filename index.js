const canvas = document.querySelector('canvas')

canvas.width = window.innerWidth
canvas.height = window.innerHeight

let c = canvas.getContext('2d')
console.log(c);

c.fillStyle = 'red'
c.strokeStyle ='blue'
c.fillRect(400, 100, 100, 100);
c.fillStyle = 'blue'
c.fillRect(400, 300, 100, 100);