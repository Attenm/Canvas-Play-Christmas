import { modes } from "./constants/constants.js";
import { canvas } from "./index.js";
import { mode } from "./modes/setmode.js";
import { runMode } from "./utils/runMode.js";

class ModesList {
    render() {
        let modeListHtml = `<ul class="modes__list"></ul>`;

        canvas.insertAdjacentHTML('afterend', modeListHtml);
        return this;
    }

    fill() {
        this.modesListElem = document.querySelector('.modes__list')

        modes.map((mode)=>{
            let modeHtml = `<li class="mode__item" 
                            data-name="${mode.name}" 
                            style="background-image : url('${mode.bgImage}')">
                                ${mode.name}
                            </li>
                            `;
            this.modesListElem.insertAdjacentHTML('beforeend', modeHtml)
        });
        return this;
    }

    eventHandler() {
        this.modesListElem.addEventListener('click', (e)=> {  
            //set mode to run determined function
            if (e.target.matches('.mode__item')) {
                let modeName = e.target.dataset.name;
                mode.setMode(modeName);
                runMode();
            }
        });
        return this;
    }
}

export const modesList = new ModesList();
