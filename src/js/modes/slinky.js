import randomColor from "../utils/color.js";

export function slinky() {
    let particlesArray;
    let modesListElem = document.querySelector('.modes__list');
    modesListElem.addEventListener('click', (e)=> {  
        if (e.target.matches('.mode__item')) {
            particlesArray = null;
        }
    })

    particlesArray = [];

    const canvas = document.querySelector('#canvas');
    const ctx = canvas.getContext('2d');
    
    class Particle {
        constructor(x, y, lineWth, radius, color) {
            this.x = x;
            this.y = y;
            this.lineWidth = lineWth;
            this.radius = radius;
            this.color = color;
            this.opacity = 0;
        }

        update() {
            if(this.opacity < 1){
                this.opacity = this.opacity + 0.02;
            } else {
                return;
            }
        }

        applyOpacity(){
            ctx.beginPath();
            ctx.lineWidth = this.lineWidth+1;
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.strokeStyle = `rgba(0,0,0,${this.opacity})`;
            ctx.stroke();
        }

        draw() {
            ctx.beginPath();
            ctx.lineWidth = this.lineWidth;
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            this.color = this.color === 'random' ? randomColor() : this.color;
            ctx.strokeStyle = this.color;
            ctx.stroke();
            this.applyOpacity();
        }
    }

    function addParticle(event) {
        const dataForm = new FormData(form);
        let radius = +dataForm.get('radius');
        let lineW = +dataForm.get('line-width');
        let color = dataForm.get('color');
        particlesArray.push(new Particle(event.x, event.y, lineW, radius, color));
    }
    const form = document.querySelector('.settings__form');
    canvas.addEventListener('click', addParticle);
    
    canvas.addEventListener('mousedown', () => {
        canvas.addEventListener('mousemove', addParticle);
        
        canvas.addEventListener('mouseup', () => {
            canvas.removeEventListener('mousemove', addParticle);
        })
    });
    
    function handleParticles() {
        particlesArray.forEach(particle => {
            particle.draw();
            particle.update();
            if(particle.opacity > 0.98) {
                particlesArray.shift();
            }
        });
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        handleParticles();
        requestAnimationFrame(animate);
    }
    animate();
}

