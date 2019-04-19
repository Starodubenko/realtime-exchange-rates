import {createSettingsAction} from "../../settings/state/actions";
import {Settings} from "../../settings";
import {AppInitActionType} from "../state";
import {createCurrencyListAction} from "../../currency/state/actions";
import {Currency} from "../../currency/model";

export const appMiddleware  = state => next => action => {
    const {dispatch} = state;
    const {type} = action;

    if (type === AppInitActionType) {
        setTimeout(() => {
            dispatch(createCurrencyListAction([
                new Currency('1', 'rub', 'Rubble'),
                new Currency('2', 'usd', 'US Dollar'),
                new Currency('3', 'eur', 'Euro'),
                new Currency('4', 'gbp', 'Great Britain Pound'),
                new Currency('5', 'jpy', 'Japanese Yen'),
                new Currency('6', 'cad', 'Canadian Dollar'),
            ]));
            dispatch(createSettingsAction(new Settings('mySettings', 1000)));
        }, 0);
    }

    next(action);
};

