import {createAction} from "redux-actions";

export const AppAddToCurrencyPairListActionType = 'App/addToCurrencyPairList';
export const AppRemoveFromCurrencyPairListActionType = 'App/removeFromCurrencyPairList';

export const AppWatchCurrencyPairActionType = 'App/watchCurrencyPair';
export const AppUnwatchCurrencyPairActionType = 'App/unwatchCurrencyPair';

export const addToCurrencyPairList = createAction(AppAddToCurrencyPairListActionType);
export const removeFromCurrencyPairList = createAction(AppRemoveFromCurrencyPairListActionType);

export const watchCurrencyPair = createAction(AppWatchCurrencyPairActionType);
export const unwatchCurrencyPair = createAction(AppUnwatchCurrencyPairActionType);
