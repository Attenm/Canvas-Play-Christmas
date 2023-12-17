
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

export const color = new Color();
