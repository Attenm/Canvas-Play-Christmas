
const mouse = {
    x: null,
    y: null
}

export function molecular() {
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

    function addParticles(e){
        mouse.x = e.x;
        mouse.y = e.y;
        for (let i = 0; i < 1; i++) {
            particlesArray.push(new Particle);
        }
    }

    canvas.addEventListener('mousedown', function () {

        canvas.addEventListener('mousemove', addParticles)
        
        canvas.addEventListener('mouseup', () => {
            canvas.removeEventListener('mousemove', addParticles)            
        })
    })

    function handleParticles() {
        for (var i = 0; i < particlesArray.length; i++) {
            particlesArray[i].update();
            particlesArray[i].draw();

            for (var j = i + 1; j < particlesArray.length; j++) {
                const dx = particlesArray[j].x - particlesArray[i].x;
                const dy = particlesArray[j].y - particlesArray[i].y;
                const distance = dx * dx + dy * dy;

                //to add a stroke between each particle
                if (distance < 10000) {
                    ctx.beginPath();
                    ctx.strokeStyle = particlesArray[i].color;
                    ctx.lineWidth = 1;
                    ctx.moveTo(particlesArray[i].x, particlesArray[i].y);
                    ctx.lineTo(particlesArray[j].x, particlesArray[j].y);
                    ctx.stroke();
                }
            }
            if (particlesArray.length > 200 ) {
                particlesArray.shift();
            }
        }
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        handleParticles();
        hueCol += 4;
        requestAnimationFrame(animate);
    }
    animate();
}