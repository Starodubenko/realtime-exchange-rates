import {createAction} from "redux-actions";
import {PlainCurrency} from "../../model";

export const CurrencyCreateActionType = 'Currency/create';
export const CurrencyCreateListActionType = 'Currency/createList';
export const CurrencyUpdateActionType = 'Currency/update';
export const CurrencyDeleteActionType = 'Currency/delete';

export const createCurrencyListAction = createAction<PlainCurrency[]>(CurrencyCreateListActionType);
export const createCurrencyAction = createAction<PlainCurrency>(CurrencyCreateActionType);
export const updateCurrencyAction = createAction<PlainCurrency>(CurrencyUpdateActionType);
export const deleteCurrencyAction = createAction<PlainCurrency>(CurrencyDeleteActionType);
