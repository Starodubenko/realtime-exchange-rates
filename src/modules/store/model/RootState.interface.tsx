import {RouterState} from "connected-react-router";
import {ReduxCompatibleReducer} from "redux-actions";
import {AppEntitiesState} from "./AppEntitiesState.interface";
import {AppState} from "../../app";

export interface RootState {
    router: RouterState,
    entities: AppEntitiesState,
    app: ReduxCompatibleReducer<AppState, any>
}
