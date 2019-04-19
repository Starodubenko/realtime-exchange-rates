import {attr, Model} from "redux-orm";
import {settingsReducer} from "./reducer";
import {Settings} from "../model";

export * from './actions';
export class SettingSchema extends Model<Settings> {
    static get fields() {
        return {
            id: attr()
        }
    }
}
SettingSchema.modelName = 'Setting';
SettingSchema.reducer = settingsReducer;
