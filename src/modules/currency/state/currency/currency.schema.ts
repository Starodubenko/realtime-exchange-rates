import {attr, Model} from "redux-orm";
import {Currency} from "../../model";
import {currencyReducer} from "./index";

export class CurrencySchema extends Model<Currency> {
    static get fields() {
        return {
            id: attr()
        }
    }
}
CurrencySchema.modelName = 'Currency';
CurrencySchema.reducer = currencyReducer;
