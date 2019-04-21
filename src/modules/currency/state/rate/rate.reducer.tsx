import {createReduxOrmModelReducer, ReduxOrmModelReducer} from "../../../common/redux-orm";
import {AppEntitiesState} from "../../../store";
import {AddRateActionType, DeleteRateActionType, UpdateRateActionType} from "./rate.actions";
import {Rate} from "../../model";


interface ICurrencyPairActionHandlers {
    [AddRateActionType]: ReduxOrmModelReducer<Rate, AppEntitiesState>;
    [UpdateRateActionType]: ReduxOrmModelReducer<Rate, AppEntitiesState>;
    [DeleteRateActionType]: ReduxOrmModelReducer<string, AppEntitiesState>;
}

const currencyPairActionsMap: ICurrencyPairActionHandlers = {
    [AddRateActionType]: (action, model, session) => {
        action.payload.pair = session.CurrencyPair.withId(action.payload.pair.id);
        model.create(action.payload);
    },
    [UpdateRateActionType]: (action, model, session) => {
        action.payload.pair = session.CurrencyPair.withId(action.payload.pair.id);
        session.Rate.withId(action.payload.id).update(action.payload);
    },
    [DeleteRateActionType]: (action, model, session) => {
        session.Rate.withId(action.payload).delete();
    },
};

export const rateReducer = createReduxOrmModelReducer<ICurrencyPairActionHandlers, Rate, AppEntitiesState>(currencyPairActionsMap);
