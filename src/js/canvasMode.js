import { modes, modeListElem } from "./constants/constants.js";

class ModeItems {
    render() {
        modes.map((mode)=>{
            let modeHtml = `<li class="mode__element" 
                            data-name="${mode.name}" 
                            style="background-image : url('${mode.bgImage}')">
                                ${mode.name}
                            </li>
                            `;
            modeListElem.insertAdjacentHTML('beforeend', modeHtml)
        })
    }
}

export const modeItems = new ModeItems();
