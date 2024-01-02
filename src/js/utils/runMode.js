
import { slinky } from "../modes/slinky.js";
import { mode } from "./setMode.js";
import { molecular } from "../modes/molecular.js";

export function runMode(){
    switch(mode.getMode()) {
        case 'slinky': 
            slinky();
            break;
        case 'molecular':
            molecular();
            break;
    }
}