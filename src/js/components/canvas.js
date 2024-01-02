
class Canvas {
    render(){
        let wrapper = document.querySelector('.wrapper');
        wrapper.insertAdjacentHTML('afterbegin', `<canvas id="canvas"></canvas>`);
        this.canvas = document.querySelector('#canvas');
    }

    remove(){
        this.canvas.remove();
    }

    setContext(){
        this.ctx = this.canvas.getContext('2d');
    }

    resize(){
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    handleResize(){
        window.addEventListener('resize', this.resize)
    }
 
}

export const canvas = new Canvas();