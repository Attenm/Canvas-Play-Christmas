import { mouse } from "../index.js";
import { slinky } from "../modes/modes.js";
import { mode } from "../modes/setmode.js";

export function draw(){
    switch(mode.getMode()) {
        case 'slinky': 
            slinky();
        break;
    }
}