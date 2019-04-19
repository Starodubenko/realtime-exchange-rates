import {
    AppAddToCurrencyPairListActionType,
    AppRemoveFromCurrencyPairListActionType,
    AppUnwatchCurrencyPairActionType,
    AppWatchCurrencyPairActionType,
} from "./actions";
import {ActionMeta, handleActions} from "redux-actions";
import {CurrencyPairIdsDto} from "../../currency/model";


export const appActionsMap = {
    [AppAddToCurrencyPairListActionType]: (state: any, action: ActionMeta<CurrencyPairIdsDto, any>) => {
        debugger;
        // model.create(action.payload);
    },
    [AppRemoveFromCurrencyPairListActionType]: (state, payload) => {
        // model.withId(action.payload).delete();
    },
    [AppWatchCurrencyPairActionType]: (state, payload) => {
        // const currentItem: CurrencyPairIdsDto = null;
        // currentItem.isWatched = true;
        debugger;
        // model.withId(action.payload).update(action.payload)
    },
    [AppUnwatchCurrencyPairActionType]: (state, payload) => {
        // const currentItem: CurrencyPairIdsDto = null;
        // currentItem.isWatched = false;
        // model.withId(action.payload).update(action.payload)
    }
};

export const appReducer = handleActions(appActionsMap, {});
