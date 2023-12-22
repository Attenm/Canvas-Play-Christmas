import { settings } from "../constants/constants.js";
import { mode } from "../modes/setmode.js";

class SettingsList { 
    render() {
        const settingsHtml = `<form action="" class="settings__form"></form>`;
        document.querySelector('.modes__list')
                .insertAdjacentHTML('afterend', settingsHtml);
        return this;
    }
    
    fill() {
        const modeType = mode.getMode();
        const settingsElem = document.querySelector('.settings__form');
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
                name="${input.name}"
                id="${input.name}" 
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
                html = `<select class="${input.type}" name="${input.name}" id="${input.name}">${options}</select>`
            }
            listItemsHtml += `<label class="label" for="${input.name}">${input.title}</label>${html}<br>`;
        });
        settingsElem.innerHTML = listItemsHtml;
        return this;
    }
}

export const settingsList = new SettingsList();

