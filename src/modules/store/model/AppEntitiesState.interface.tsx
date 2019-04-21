import {ORMCommonState, TableState} from "redux-orm";
import {Settings} from "../../settings";
import {Currency, CurrencyPair} from "../../currency";

export interface AppEntitiesState extends ORMCommonState {
    Setting: TableState<Settings>,
    Currency: TableState<Currency>,
    SelectedCurrencyPair: TableState<CurrencyPair>,
}
