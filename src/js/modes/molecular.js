
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
        constructor(radius, lineWidth, speed, maxLength) {
            this.x = mouse.x;
            this.y = mouse.y;
            this.radius = radius;
            this.lineWidth = lineWidth;
            this.speed = speed;
            this.maxLength = maxLength;
            this.speedX = Math.random() * this.speed - this.speed / 2;
            this.speedY = Math.random() * this.speed - this.speed / 2;
            this.color = 'hsl(' + hueCol + ', 100%, 50%)';
        }
    
        update() {
            this.x += this.speedX;
            this.y += this.speedY;
        }
    
        draw() {
            ctx.fillStyle = this.color;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    function addParticles(e){
        const formElem = document.querySelector('.settings__form');
        const formData = new FormData(formElem);
        const radius = formData.get('radius');
        const lineWidth = formData.get('line-width');
        const speed = formData.get('speed');
        const maxLength = formData.get('max-length');
        mouse.x = e.x;
        mouse.y = e.y;
        for (let i = 0; i < 1; i++) {
            particlesArray.push(new Particle(radius, lineWidth, speed, maxLength));
        }
    }

    canvas.addEventListener('click', addParticles);

    canvas.addEventListener('mousedown', function () {

        canvas.addEventListener('mousemove', addParticles);
        
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
                if (distance < ((particlesArray[i].maxLength + particlesArray[j].maxLength) / 2) * 10) {
                    ctx.beginPath();
                    ctx.strokeStyle = particlesArray[i].color;
                    ctx.lineWidth = particlesArray[i].lineWidth;
                    ctx.moveTo(particlesArray[i].x, particlesArray[i].y);
                    ctx.lineTo(particlesArray[j].x, particlesArray[j].y);
                    ctx.stroke();
                }
            }
            if (particlesArray.length > 350 ) {
                particlesArray.shift();
            }
        }
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        if(particlesArray?.length){
            handleParticles();
        }
        hueCol += 4;
        requestAnimationFrame(animate);
    }
    animate();
}