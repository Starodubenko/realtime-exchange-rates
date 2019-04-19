import {RouterState} from "connected-react-router";
import {AppEntitiesState} from "./AppEntitiesState.interface";
import {ReduxCompatibleReducer} from "redux-actions";
import {AppState} from "../app/state/AppState.interface";

export interface RootState {
    router: RouterState,
    entities: AppEntitiesState,
    app: ReduxCompatibleReducer<AppState, any>
}
