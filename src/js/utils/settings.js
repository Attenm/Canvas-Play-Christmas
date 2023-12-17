
class SettingsList { 
    render() {
        const settingsHtml = `<ul class="settings__list"></ul>`;
        document.querySelector('body')
                .insertAdjacentHTML('beforeend', settingsHtml);
    }
}

export const settingsList = new SettingsList();

