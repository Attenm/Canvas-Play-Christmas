import {modeItems } from "./canvasMode.js";

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener('resize', function() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
})

modeItems.render();

const mouse = {
    x : null,
    y : null 
}

class Color {
    random() {
        let color = `rgb(${this.randomVal()},${this.randomVal()},${this.randomVal()})`;
        return color;
    }

    randomVal(){
        let val = Math.floor((Math.random() * 251));
        return val;
    }
}

let color = new Color();

canvas.addEventListener('mousedown', () => {
    canvas.addEventListener('mousemove', draw)
});

canvas.addEventListener('mouseup', delMoveHandler)

function delMoveHandler() {
    canvas.removeEventListener('mousemove', draw)
}

function draw(event) {
    mouse.x = event.x;
    mouse.y = event.y;
    drawCircle();
}

function drawCircle() {
    ctx.fillStyle = `${color.random()}`;
    ctx.beginPath();
    ctx.arc(mouse.x, mouse.y, 50, 0, Math.PI * 2);
    ctx.fill()
}

