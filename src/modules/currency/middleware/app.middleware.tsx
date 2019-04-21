import io from "socket.io-client";
import {
    addRateAction,
    currencyPairByIdSelector,
    rateByIdSelector,
    UnwatchCurrencyPairActionType,
    updateRateAction,
    WatchCurrencyPairActionType
} from "../state";
import {Action} from "redux-actions";
import {Rate} from "../model";

const sockets = new Map<string, SocketIOClient.Socket>();

export const currencyMiddleware  = state => next => (action: Action<string>) => {
    const {dispatch} = state;
    const {type} = action;

    if (type === WatchCurrencyPairActionType) {
        const connection = io('prices-server-mock.spotware.com:8084');
        const currencyPairId = action.payload;
        const currencyPair = currencyPairByIdSelector(state.getState(), currencyPairId);
        const newRate = new Rate(currencyPair);
        sockets.set(newRate.id, connection);

        connection.on('connect', () => {
            connection.emit('subscribe-req', {
                pair: currencyPair.toString().toLowerCase(),
                uid: Math.random()
            });

            connection.on('price-change', (data) => {
                const newRateId = newRate.id;
                const rateToUpdate = rateByIdSelector(state.getState(), newRateId);
                rateToUpdate.value = data.price;
                dispatch(updateRateAction(rateToUpdate));
            });
        });

        dispatch(addRateAction(newRate));
    }

    if (type === UnwatchCurrencyPairActionType) {

    }

    next(action);
};

