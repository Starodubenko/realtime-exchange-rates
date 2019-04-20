import {RouterState} from "connected-react-router";
import {AppEntitiesState} from "./AppEntitiesState.interface";

export interface RootState {
    router: RouterState,
    entities: AppEntitiesState,
}
