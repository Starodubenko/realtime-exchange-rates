import {createReducer, ORM} from 'redux-orm';
import {SettingSchema} from "../settings";
import {CurrencyPairSchema, CurrencySchema, RateSchema} from "../currency";
import {AppEntitiesState} from "./model";

export const appStateOrm = new ORM<AppEntitiesState>();
// @ts-ignore
appStateOrm.register(SettingSchema, CurrencySchema, CurrencyPairSchema, RateSchema);

export const ormReducer = createReducer<AppEntitiesState>(appStateOrm);

export const dbStateSelector = state => {
    return state;
};
