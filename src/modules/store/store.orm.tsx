import {createReducer, ORM} from 'redux-orm';
import {SettingSchema} from "../settings";
import {CurrencySchema} from "../currency";
import {AppEntitiesState} from "./model";
import {SelectedCurrencyPairSchema} from "../app/state";

export const appStateOrm = new ORM<AppEntitiesState>();
// @ts-ignore
appStateOrm.register(SettingSchema, CurrencySchema, SelectedCurrencyPairSchema);

export const ormReducer = createReducer<AppEntitiesState>(appStateOrm);

export const dbStateSelector = state => {
    return state;
};
