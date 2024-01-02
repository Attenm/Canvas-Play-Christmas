import { canvas } from "./components/canvas.js";
import { modesList } from "./components/modesList.js";
import { settingsList } from "./components/settings.js";
import { runMode } from "./utils/runMode.js";
// import { music } from "./utils/music.js";

function renderPage(){
    canvas.render();
    modesList.render();
    settingsList.render();
}

function fillPage(){
    modesList.fill();
    settingsList.fill();
}

function initComponents(){
    modesList.eventHandler();
    canvas.handleResize();
    canvas.resize();
    canvas.setContext();
    runMode();
}

renderPage();
fillPage();
initComponents();







// music.play();
