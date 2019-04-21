import {createAction} from "redux-actions";

export const AppAddToCurrencyPairListActionType = 'CurrencyPair/addToCurrencyPairList';
export const AppRemoveFromCurrencyPairListActionType = 'CurrencyPair/removeFromCurrencyPairList';

export const addToCurrencyPairList = createAction(AppAddToCurrencyPairListActionType);
export const removeFromCurrencyPairList = createAction(AppRemoveFromCurrencyPairListActionType);
