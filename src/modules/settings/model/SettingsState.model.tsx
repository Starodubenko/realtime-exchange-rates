import {Settings} from "./Settings.model";

export class SettingsState {
    value: Settings;

    constructor(value: Settings) {
        this.value = value;
    }
}
