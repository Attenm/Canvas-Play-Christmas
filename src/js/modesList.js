import { modes } from "./constants/constants.js";
import { canvas } from "./index.js";
import { mode } from "./modes/setmode.js";

class ModesList {
    render() {
        let modeListHtml = `<ul class="modes__list"></ul>`;

        canvas.insertAdjacentHTML('afterend', modeListHtml);

        this.modesListElem = document.querySelector('.modes__list')

        modes.map((mode)=>{
            let modeHtml = `<li class="mode__element" 
                            data-name="${mode.name}" 
                            style="background-image : url('${mode.bgImage}')">
                                ${mode.name}
                            </li>
                            `;
            this.modesListElem.insertAdjacentHTML('beforeend', modeHtml)
        })

        this.eventHandler();
    }

    eventHandler() {
        this.modesListElem.addEventListener('click', (e)=> {
            if (e.target.matches('.mode__element')) {
                let modeName = e.target.dataset.name;
                alert(modeName)
                mode.setMode(modeName);
            }
        })
    }
}

export const modesList = new ModesList();
