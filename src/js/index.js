import { modesList } from "./modesList.js";
import { runMode } from "./utils/runMode.js";
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

modesList.render().fill().eventHandler();;
settingsList.render().fill();
music.play();
runMode();

