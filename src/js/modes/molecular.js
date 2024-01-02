
const mouse = {
    x: null,
    y: null
}

export function molecular() {
    const canvas = document.querySelector('#canvas');
    const ctx = canvas.getContext('2d');

    let hueCol = 0;

    class Particle {
        constructor() {
            this.x = mouse.x;
            this.y = mouse.y;
            this.speedX = Math.random() * 3 - 1.5;
            this.speedY = Math.random() * 3 - 1.5;
            this.color = 'hsl(' + hueCol + ', 100%, 50%)';
        }
    
        update() {
            this.x += this.speedX;
            this.y += this.speedY;
        }
    
        draw() {
            ctx.fillStyle = this.color;
            ctx.beginPath();
            ctx.arc(this.x, this.y, 15, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    let particles = [];

    function addParticles(e){
        mouse.x = e.x;
        mouse.y = e.y;
        for (let i = 0; i < 1; i++) {
            particles.push(new Particle);
        }
    }

    canvas.addEventListener('mousedown', function () {

        canvas.addEventListener('mousemove', addParticles)
        
        canvas.addEventListener('mouseup', () => {
            canvas.removeEventListener('mousemove', addParticles)            
        })
    })

    function handleParticles() {
        for (var i = 0; i < particles.length; i++) {
            particles[i].update();
            particles[i].draw();

            for (var j = i + 1; j < particles.length; j++) {
                const dx = particles[j].x - particles[i].x;
                const dy = particles[j].y - particles[i].y;
                const distance = dx * dx + dy * dy;

                //to add a stroke between each particle
                if (distance < 10000) {
                    ctx.beginPath();
                    ctx.strokeStyle = particles[i].color;
                    ctx.lineWidth = 1;
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.stroke();
                }
            }

            if (particles.length > 200 ) {
                particles.shift();
            }
        }
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = 'rgba(0, 0, 0)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        handleParticles();
        hueCol += 4;
        requestAnimationFrame(animate);
    }
    animate();
}