import {createSettingsAction} from "../../modules/settings/state/actions";
import {Settings} from "../../modules/settings";
import {AppInitActionType} from "../state";

export const appMiddleware  = state => next => action => {
    const {dispatch} = state;
    const {type} = action;

    if (type === AppInitActionType) {
        setTimeout(() => {
            dispatch(createSettingsAction(new Settings('mySettings', 1000)));
        }, 2000);
    }

    next(action);
};

