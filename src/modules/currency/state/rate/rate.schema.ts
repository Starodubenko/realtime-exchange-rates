import {attr, fk, Model} from "redux-orm";
import {Rate} from "../../model";
import {rateReducer} from "./rate.reducer";

export class RateSchema extends Model<Rate> {
    static get fields() {
        return {
            id: attr(),
            pair: fk('CurrencyPair', 'rate'),
        }
    }
}
RateSchema.modelName = 'Rate';
RateSchema.reducer = rateReducer;
