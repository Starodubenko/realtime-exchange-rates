import {createAction} from "redux-actions";
import {Currency} from "../model";

export const CurrencyCreateActionType = 'Currency/create';
export const CurrencyCreateListActionType = 'Currency/createList';
export const CurrencyUpdateActionType = 'Currency/update';
export const CurrencyDeleteActionType = 'Currency/delete';

export const createCurrencyListAction = createAction<Currency[]>(CurrencyCreateListActionType);
export const createCurrencyAction = createAction<Currency>(CurrencyCreateActionType);
export const updateCurrencyAction = createAction<Currency>(CurrencyUpdateActionType);
export const deleteCurrencyAction = createAction<Currency>(CurrencyDeleteActionType);
