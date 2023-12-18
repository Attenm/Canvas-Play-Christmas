import { canvas, ctx } from "../index.js";
import {color} from "../utils/color.js";

let particlesArray = [];

export class Particle {
    constructor(x, y, lineWth, radius) {
        this.x = x;
        this.y = y;
        this.lineWidth = lineWth;
        this.radius = radius;
        this.color = color.random();
    }

    draw() {
        ctx.beginPath();
        ctx.lineWidth = this.lineWidth;
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.strokeStyle = this.color;
        ctx.stroke();
    }
}

export function slinky() {

    canvas.addEventListener('mousedown', () => {
        canvas.addEventListener('mousemove', onMouseMove);
        
        const form = document.querySelector('.settings__form');
        const dataForm = new FormData(form);
        let radius = dataForm.get('radius');
        let lineW = dataForm.get('line-width');
        
        function onMouseMove(event) {
            particlesArray.push(new Particle(event.x, event.y, lineW, radius));
            animate();
        }
        canvas.addEventListener('mouseup', () => {
            canvas.removeEventListener('mousemove', onMouseMove);
        })
        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particlesArray.forEach(particle => {
                particle.draw();
                ctx.fillStyle = 'rgba(0,0,0,0.09)';
                ctx.fillRect(0, 0, canvas.width, canvas.height);
                if( particlesArray.length> 20 ){
                    particlesArray.shift()
                }
            });
        }
    });
}