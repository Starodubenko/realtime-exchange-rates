import {createSettingsAction, Settings} from "../../settings";
import {AppInitActionType} from "../state";
import {createCurrencyListAction, Currency} from "../../currency";

export const appMiddleware  = state => next => action => {
    const {dispatch} = state;
    const {type} = action;

    if (type === AppInitActionType) {
        setTimeout(() => {
            dispatch(createCurrencyListAction([
                new Currency('1', 'rub', 'Rubble').toPlainObject(),
                new Currency('2', 'usd', 'US Dollar').toPlainObject(),
                new Currency('3', 'eur', 'Euro').toPlainObject(),
                new Currency('4', 'gbp', 'Great Britain Pound').toPlainObject(),
                new Currency('5', 'jpy', 'Japanese Yen').toPlainObject(),
                new Currency('6', 'cad', 'Canadian Dollar').toPlainObject(),
            ]));
            dispatch(createSettingsAction(new Settings('mySettings', 1000).toPlainObject()));
        }, 0);
    }

    next(action);
};

