import {ORMCommonState, TableState} from "redux-orm";
import {Settings} from "../../settings";
import {Currency} from "../../currency";
import {CurrencyPairIdsDto} from "../../app";

export interface AppEntitiesState extends ORMCommonState {
    Setting: TableState<Settings>,
    Currency: TableState<Currency>,
    SelectedCurrencyPair: TableState<CurrencyPairIdsDto>,
}
