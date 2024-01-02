
export function snow() {
    let particlesArray;
    let modesListElem = document.querySelector('.modes__list');
    modesListElem.addEventListener('click', (e)=> {  
        if (e.target.matches('.mode__item')) {
            particlesArray = null;
        }
    })

    particlesArray = [];

    const canvas = document.querySelector('canvas');
    const ctx = canvas.getContext('2d');
    
    let mouse = {
        x : null,
        y : null 
    }
    
    canvas.addEventListener('mousemove', (e)=> {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
    })
    
    class Particle {
        constructor(){
            this.x = canvas.width * Math.random();
            this.y = 0;
            this.color = '#fff';
            this.minSize = 0.1;
            this.size = 13 ** Math.random() + this.minSize;
            this.speed = this.size;
        }
        
        update(){
            this.x = this.x - ((mouse.x - canvas.width / 2) * (this.size / 2100 ));
            this.y = this.y += this.speed - (mouse.y - canvas.height / 2) * (this.size / 2500); 
        }
    
        draw() {
            if (this.size > 11){
                ctx.beginPath();
                ctx.shadowBlur = this.size; 
                ctx.fillStyle = 'rgba(255,255,255,0.7)';
                ctx.shadowColor = 'rgba(255,255,255)';
                ctx.arc(this.x, this.y, this.size, 0, Math.PI*2);
                ctx.fill();
                
                ctx.shadowColor = null;
                ctx.shadowBlur = 0;
            } else {
                
                let opacity = this.size < 3 ? 0.3 : 1;
        
                ctx.beginPath();
                ctx.fillStyle = `rgba(255,255,255,${opacity})`;
                ctx.fillRect(this.x, this.y, this.size, this.size);
                ctx.fill();
            }
        }
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = 'rgb(255, 255, 255, 0.10)';
        ctx.fillRect(0, 0, canvas.width, canvas.height)
        handleParticles();

        setTimeout(()=>{
            animate();
        },16.6)
    }

    function handleParticles() {
        for (let i = 0; i <= 5; i++) {
            particlesArray.push(new Particle())
        }
        particlesArray.forEach((particle, index) => {
            particle.update();
            particle.draw();
            if(particlesArray[index].y >= canvas.height){
                particlesArray.splice(index, 1);
            }
        });
    }
    animate();
}