import { mouse } from "../index.js";
import { slinky } from "../modes/modes.js";
import { mode } from "../modes/setmode.js";

export function draw(event){
    mouse.x = event.x;
    mouse.y = event.y;

    switch(mode.getMode()) {
        case 'slinky': 
            slinky();
        break;
    }
}