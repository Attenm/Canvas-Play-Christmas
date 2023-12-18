import { settings } from "../constants/constants.js";
import { mode } from "../modes/setmode.js";

class SettingsList { 
    render() {
        const settingsHtml = `<ul class="settings__list"></ul>`;
        document.querySelector('.modes__list')
                .insertAdjacentHTML('afterend', settingsHtml);
    }
    
    fill() {
        const modeType = mode.getMode();
        const settingsElem = document.querySelector('.settings__list');
        let currMode;
        for (currMode in settings){
            currMode = settings[modeType];
        }

        let listItemsHtml = '';
        currMode.forEach(input => {
            let html;
            if (input.type === 'range'){
                html =  `<input type="${input.type}" 
                class="${input.class}" 
                min="${input.min}" 
                max="${input.max}" 
                value="${input.defaultValue}"
                step="${input.step}"></input>`;
            }

            if(input.type === 'select') {
                let options = ''
                input.options.forEach(option => {
                    options += `<option value="${option}">${option}</option>`
                })
                html = `<select class="${input.type}">${options}</select>`
            }
            listItemsHtml += `<li class="settings__item">${input.name}${html}<li/>`;
        });
        settingsElem.innerHTML = listItemsHtml;
    }
}

export const settingsList = new SettingsList();

