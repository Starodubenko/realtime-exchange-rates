import {ORMCommonState, TableState} from "redux-orm";
import {Settings} from "../settings/model";

export interface AppEntitiesState extends ORMCommonState {
    settings: TableState<Settings>,
}
