import {createAction} from "redux-actions";
import {PlainSettings} from "../model";

export const SettingsCreateActionType = 'PlainSettings/create';
export const SettingsUpdateActionType = 'PlainSettings/update';
export const SettingsDeleteActionType = 'PlainSettings/delete';

export const createSettingsAction = createAction<PlainSettings>(SettingsCreateActionType);
export const updateSettingsAction = createAction<PlainSettings>(SettingsUpdateActionType);
export const deleteSettingsAction = createAction<PlainSettings>(SettingsDeleteActionType);
