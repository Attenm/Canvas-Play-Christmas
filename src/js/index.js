import {modeItems } from "./canvasMode.js";
import { modeListElem } from "./constants/constants.js";
import { mode } from "./modes/setmode.js";
import { draw } from "./utils/draw.js";

export const canvas = document.getElementById('canvas');
export const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener('resize', function() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
})

export const mouse = {
    x : null,
    y : null 
}

modeItems.render();
draw();

modeListElem.addEventListener('click', (e)=> {
    if (e.target.matches('.mode__element')) {
        let modeName = e.target.dataset.name;
        alert(modeName)
        mode.setMode(modeName);
    }
})
