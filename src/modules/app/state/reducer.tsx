import {
    AppAddToCurrencyPairListActionType,
    AppRemoveFromCurrencyPairListActionType,
    AppUnwatchCurrencyPairActionType,
    AppWatchCurrencyPairActionType,
} from "./actions";
import {createReduxOrmModelReducer, ReduxOrmModelReducer} from "../../common/redux-orm";
import {AppEntitiesState} from "../../store/model";
import {CurrencyPairIdsDto} from "../model";


export interface ICurrencyActionHandlers {
    [AppAddToCurrencyPairListActionType]: ReduxOrmModelReducer<CurrencyPairIdsDto, AppEntitiesState>;
    [AppRemoveFromCurrencyPairListActionType]: ReduxOrmModelReducer<string, AppEntitiesState>;
    [AppWatchCurrencyPairActionType]: ReduxOrmModelReducer<string, AppEntitiesState>;
    [AppUnwatchCurrencyPairActionType]: ReduxOrmModelReducer<string, AppEntitiesState>;
}

export const settingsActionsMap: ICurrencyActionHandlers = {
    [AppAddToCurrencyPairListActionType]: (action, model, session) => {
        model.create(action.payload);
    },
    [AppRemoveFromCurrencyPairListActionType]: (action, model, session) => {
        // model.withId(action.payload).update(action.payload)
    },
    [AppWatchCurrencyPairActionType]: (action, model, session) => {
        // model.withId(action.payload).update(action.payload)
    },
    [AppUnwatchCurrencyPairActionType]: (action, model, session) => {
        // model.withId(action.payload).update(action.payload)
    }
};

export const selectedCurrencyPairReducer = createReduxOrmModelReducer<ICurrencyActionHandlers, CurrencyPairIdsDto, AppEntitiesState>(settingsActionsMap);

