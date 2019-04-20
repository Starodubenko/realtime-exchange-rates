import {createReduxOrmModelReducer, ReduxOrmModelReducer} from "../../../common/redux-orm";
import {AppEntitiesState} from "../../../store";
import {
    AppAddToCurrencyPairListActionType,
    AppRemoveFromCurrencyPairListActionType,
    AppUnwatchCurrencyPairActionType,
    AppWatchCurrencyPairActionType
} from "./currencyPair.actions";
import {CurrencyPair} from "../../model";


interface ICurrencyPairActionHandlers {
    [AppAddToCurrencyPairListActionType]: ReduxOrmModelReducer<CurrencyPair, AppEntitiesState>;
    [AppRemoveFromCurrencyPairListActionType]: ReduxOrmModelReducer<string, AppEntitiesState>;
    [AppWatchCurrencyPairActionType]: ReduxOrmModelReducer<string, AppEntitiesState>;
    [AppUnwatchCurrencyPairActionType]: ReduxOrmModelReducer<string, AppEntitiesState>;
}

const currencyPairActionsMap: ICurrencyPairActionHandlers = {
    [AppAddToCurrencyPairListActionType]: (action, model, session) => {
        const primaryCurrencyLink = session.Currency.withId(action.payload.primaryCurrency.id);
        const secondaryCurrencyLink = session.Currency.withId(action.payload.secondaryCurrency.id);

        action.payload.primaryCurrency = primaryCurrencyLink;
        action.payload.secondaryCurrency = secondaryCurrencyLink;
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

export const currencyPairReducer = createReduxOrmModelReducer<ICurrencyPairActionHandlers, CurrencyPair, AppEntitiesState>(currencyPairActionsMap);
