import {createReduxOrmModelReducer, ReduxOrmModelReducer} from "../../../common/redux-orm";
import {AppEntitiesState} from "../../../store";
import {
    AddToCurrencyPairListActionType,
    RemoveFromCurrencyPairListActionType,
} from "./currencyPair.actions";
import {CurrencyPair} from "../../model";


interface ICurrencyPairActionHandlers {
    [AddToCurrencyPairListActionType]: ReduxOrmModelReducer<CurrencyPair, AppEntitiesState>;
    [RemoveFromCurrencyPairListActionType]: ReduxOrmModelReducer<string, AppEntitiesState>;
}

const currencyPairActionsMap: ICurrencyPairActionHandlers = {
    [AddToCurrencyPairListActionType]: (action, model, session) => {
        const primaryCurrencyLink = session.Currency.withId(action.payload.primaryCurrency.id);
        const secondaryCurrencyLink = session.Currency.withId(action.payload.secondaryCurrency.id);

        action.payload.primaryCurrency = primaryCurrencyLink;
        action.payload.secondaryCurrency = secondaryCurrencyLink;
        model.create(action.payload);
    },
    [RemoveFromCurrencyPairListActionType]: (action, model, session) => {
        // model.withId(action.payload).update(action.payload)
    },
};

export const currencyPairReducer = createReduxOrmModelReducer<ICurrencyPairActionHandlers, CurrencyPair, AppEntitiesState>(currencyPairActionsMap);
