import {createSettingsAction} from "../../modules/settings/state/actions";
import {Settings} from "../../modules/settings";
import {AppInitActionType} from "../state";
import {createCurrencyListAction} from "../../modules/currency/state/actions";
import {Currency} from "../../modules/currency/model";

export const appMiddleware  = state => next => action => {
    const {dispatch} = state;
    const {type} = action;

    if (type === AppInitActionType) {
        setTimeout(() => {
            dispatch(createCurrencyListAction([
                new Currency('1', 'rub', 'Rubble'),
                new Currency('2', 'usd', 'US Dollar'),
                new Currency('3', 'eur', 'Euro'),
                new Currency('4', 'gbp', 'GB Pounds'),
            ]));
            dispatch(createSettingsAction(new Settings('mySettings', 1000)));
        }, 0);
    }

    next(action);
};

