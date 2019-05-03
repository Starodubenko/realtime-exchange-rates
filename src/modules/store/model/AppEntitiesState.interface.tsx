import {ORMCommonState, TableState} from "redux-orm";
import {PlainSettings} from "../../settings";
import {Currency, CurrencyPair} from "../../currency";

export interface AppEntitiesState extends ORMCommonState {
    Setting: TableState<PlainSettings>,
    Currency: TableState<Currency>,
    CurrencyPair: TableState<CurrencyPair>,
}
