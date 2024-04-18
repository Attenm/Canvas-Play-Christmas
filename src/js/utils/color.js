
export default function randomColor() {
    function randomVal(){
        let val = Math.floor((Math.random() * 251));
        return val;
    }

    let color = `rgb(${randomVal()},${randomVal()},${randomVal()})`;
    return color;
}