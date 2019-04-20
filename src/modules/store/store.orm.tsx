import {createReducer, ORM} from 'redux-orm';
import {SettingSchema} from "../settings";
import {CurrencyPairSchema, CurrencySchema} from "../currency";
import {AppEntitiesState} from "./model";

export const appStateOrm = new ORM<AppEntitiesState>();
// @ts-ignore
appStateOrm.register(SettingSchema, CurrencySchema, CurrencyPairSchema);

export const ormReducer = createReducer<AppEntitiesState>(appStateOrm);

export const dbStateSelector = state => {
    return state;
};
