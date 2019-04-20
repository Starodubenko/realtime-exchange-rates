import {attr, Model} from "redux-orm";
import {CurrencyPairIdsDto} from "../model";
import {selectedCurrencyPairReducer} from "./reducer";

export * from './actions';
export * from './selectors';
export class SelectedCurrencyPairSchema extends Model<CurrencyPairIdsDto> {
    static get fields() {
        return {
            id: attr()
        }
    }
}
SelectedCurrencyPairSchema.modelName = 'SelectedCurrencyPair';
SelectedCurrencyPairSchema.reducer = selectedCurrencyPairReducer;

