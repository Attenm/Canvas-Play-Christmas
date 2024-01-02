import { canvas } from "./components/canvas.js";
import { modesList } from "./components/modesList.js";
import { settingsList } from "./components/settings.js";
// import { music } from "./utils/music.js";

canvas.render();
modesList.render();
settingsList.render();
modesList.fill();
settingsList.fill();
modesList.eventHandler();
// music.play();
