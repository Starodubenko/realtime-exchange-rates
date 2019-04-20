import {
    CurrencyCreateActionType,
    CurrencyCreateListActionType,
    CurrencyDeleteActionType,
    CurrencyUpdateActionType
} from "./currency.actions";
import {createReduxOrmModelReducer, ReduxOrmModelReducer} from "../../../common";
import {Currency} from "../../model";
import {AppEntitiesState} from "../../../store";


interface ICurrencyActionHandlers {
    [CurrencyCreateActionType]: ReduxOrmModelReducer<Currency, AppEntitiesState>;
    [CurrencyCreateListActionType]: ReduxOrmModelReducer<Currency[], AppEntitiesState>;
    [CurrencyUpdateActionType]: ReduxOrmModelReducer<Currency, AppEntitiesState>;
    [CurrencyDeleteActionType]: ReduxOrmModelReducer<string, AppEntitiesState>;
}

const currencyActionsMap: ICurrencyActionHandlers = {
    [CurrencyCreateActionType]: (action, model, session) => {
        model.create(action.payload);
    },
    [CurrencyCreateListActionType]: (action, model, session) => {
        action.payload.forEach(item => model.create(item));
    },
    [CurrencyUpdateActionType]: (action, model, session) => {
        model.withId(action.payload.id).update(action.payload)
    },
    [CurrencyDeleteActionType]: (action, model, session) => {
        model.withId(action.payload).delete();
    }
};

export const currencyReducer = createReduxOrmModelReducer<ICurrencyActionHandlers, Currency, AppEntitiesState>(currencyActionsMap);
