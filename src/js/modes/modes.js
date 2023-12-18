import { canvas, ctx } from "../index.js";
import {color} from "../utils/color.js";

let particlesArray = [];

export class Particle {
    constructor(x, y, lineWth, radius, color) {
        this.x = x;
        this.y = y;
        this.lineWidth = lineWth;
        this.radius = radius;
        this.color = color;
    }

    draw() {
        ctx.beginPath();
        ctx.lineWidth = this.lineWidth;
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.strokeStyle = this.color === 'random' ? color.random() : this.color;
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
        let amount = dataForm.get('amount');
        let opacity = dataForm.get('opacity') / 100;
        let color = dataForm.get('color');
        console.log(color);
        
        function onMouseMove(event) {
            particlesArray.push(new Particle(event.x, event.y, lineW, radius, color));
            animate();
        }
        canvas.addEventListener('mouseup', () => {
            canvas.removeEventListener('mousemove', onMouseMove);
        })

        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particlesArray.forEach(particle => {
                particle.draw();
                ctx.fillStyle = `rgba(0,0,0,${opacity})`;
                ctx.fillRect(0, 0, canvas.width, canvas.height);
                if( particlesArray.length> amount ){
                    particlesArray.shift()
                }
            });
        }
    });
}