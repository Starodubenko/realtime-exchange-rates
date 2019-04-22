import {createAction} from "redux-actions";

export const AddToCurrencyPairListActionType = 'CurrencyPair/addToCurrencyPairList';
export const RemoveFromCurrencyPairListActionType = 'CurrencyPair/removeFromCurrencyPairList';

export const addToCurrencyPairList = createAction(AddToCurrencyPairListActionType);
export const removeFromCurrencyPairList = createAction(RemoveFromCurrencyPairListActionType);
