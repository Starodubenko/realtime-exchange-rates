import {ORMCommonState, TableState} from "redux-orm";
import {Settings} from "../../settings";
import {Currency} from "../../currency";

export interface AppEntitiesState extends ORMCommonState {
    settings: TableState<Settings>,
    currency: TableState<Currency>,
}
