import {createReducer, ORM} from 'redux-orm';
import {SettingSchema} from "../settings/state";
import {CurrencySchema} from "../currency/state";
import {AppEntitiesState} from "./model";

export const appStateOrm = new ORM<AppEntitiesState>();
// @ts-ignore
appStateOrm.register(SettingSchema, CurrencySchema);

export const ormReducer = createReducer<AppEntitiesState>(appStateOrm);

export const dbStateSelector = state => {
    return state;
};
