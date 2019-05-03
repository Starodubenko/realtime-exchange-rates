import {createReduxOrmModelReducer, ReduxOrmModelReducer} from "../../common";
import {SettingsCreateActionType, SettingsDeleteActionType, SettingsUpdateActionType} from "./actions";
import {PlainSettings} from "../model";
import {AppEntitiesState} from "../../store";

export interface ISettingsActionHandlers {
    [SettingsCreateActionType]: ReduxOrmModelReducer<PlainSettings, AppEntitiesState>;
    [SettingsUpdateActionType]: ReduxOrmModelReducer<PlainSettings, AppEntitiesState>;
    [SettingsDeleteActionType]: ReduxOrmModelReducer<string, AppEntitiesState>;
}

export const settingsActionsMap: ISettingsActionHandlers = {
    [SettingsCreateActionType]: (action, model, session) => {
        model.create(action.payload);
    },
    [SettingsUpdateActionType]: (action, model, session) => {
        model.withId(action.payload.id).update(action.payload)
    },
    [SettingsDeleteActionType]: (action, model, session) => {
        model.withId(action.payload).delete();
    }
};

export const settingsReducer = createReduxOrmModelReducer<ISettingsActionHandlers, PlainSettings, AppEntitiesState>(settingsActionsMap);
