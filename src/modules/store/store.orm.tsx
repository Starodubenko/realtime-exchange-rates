import {createReducer, ORM} from 'redux-orm';
import {AppEntitiesState} from "../common";
import {SettingSchema} from "../settings/state";
import {CurrencySchema} from "../currency/state";

export const appStateOrm = new ORM<AppEntitiesState>();
// @ts-ignore
appStateOrm.register(SettingSchema, CurrencySchema);

export const ormReducer = createReducer<AppEntitiesState>(appStateOrm);

export const dbStateSelector = state => {
    return state;
};
