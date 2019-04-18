import {createAction} from "redux-actions";
import {Settings} from "../model";

export const SettingsCreateActionType = 'Settings/create';
export const SettingsUpdateActionType = 'Settings/update';
export const SettingsDeleteActionType = 'Settings/delete';

export const createSettingsAction = createAction<Settings>(SettingsCreateActionType);
export const updateSettingsAction = createAction<Settings>(SettingsUpdateActionType);
export const deleteSettingsAction = createAction<Settings>(SettingsDeleteActionType);
