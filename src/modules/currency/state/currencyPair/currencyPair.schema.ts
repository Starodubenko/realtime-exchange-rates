import {attr, fk, Model, } from "redux-orm";
import {CurrencyPair} from "../../model";
import {currencyPairReducer} from "./currencyPair.reducer";

export class CurrencyPairSchema extends Model<CurrencyPair> {
    static get fields() {
        return {
            id: attr(),
            primaryCurrency: fk('Currency', 'pc'),
            secondaryCurrency: fk('Currency', 'sc')
        }
    }
}
CurrencyPairSchema.modelName = 'CurrencyPair';
CurrencyPairSchema.reducer = currencyPairReducer;
