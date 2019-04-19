import {createReduxOrmModelReducer, ReduxOrmModelReducer} from "../../common";
import {AppEntitiesState} from "../../store";
import {
    CurrencyCreateActionType,
    CurrencyCreateListActionType,
    CurrencyDeleteActionType,
    CurrencyUpdateActionType
} from "./actions";
import {Currency} from "../model";

export interface ICurrencyActionHandlers {
    [CurrencyCreateActionType]: ReduxOrmModelReducer<Currency, AppEntitiesState>;
    [CurrencyCreateListActionType]: ReduxOrmModelReducer<Currency[], AppEntitiesState>;
    [CurrencyUpdateActionType]: ReduxOrmModelReducer<Currency, AppEntitiesState>;
    [CurrencyDeleteActionType]: ReduxOrmModelReducer<string, AppEntitiesState>;
}

export const settingsActionsMap: ICurrencyActionHandlers = {
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

export const currencyReducer = createReduxOrmModelReducer<ICurrencyActionHandlers, Currency, AppEntitiesState>(settingsActionsMap);
