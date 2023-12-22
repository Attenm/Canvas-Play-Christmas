import { modesList } from "./modesList.js";
import { draw } from "./utils/draw.js";
import { settingsList } from "./utils/settings.js";
import { music } from "./utils/music.js"

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

modesList.render();
modesList.fill();
settingsList.render();
settingsList.fill();
music.play();
draw();

