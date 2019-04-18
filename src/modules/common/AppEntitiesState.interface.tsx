import {ORMCommonState, TableState} from "redux-orm";
import {Settings} from "../settings/model";
import {Currency} from "../currency/model";

export interface AppEntitiesState extends ORMCommonState {
    settings: TableState<Settings>,
    currency: TableState<Currency>,
}
