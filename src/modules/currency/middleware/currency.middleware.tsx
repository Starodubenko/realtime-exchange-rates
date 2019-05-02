import io from "socket.io-client";
import {
    addRateAction,
    AddToCurrencyPairListActionType,
    currencyPairByIdSelector,
    deleteRateAction,
    rateByIdSelector,
    UnwatchCurrencyPairActionType,
    updateRateAction,
    WatchCurrencyPairActionType
} from "../state";
import {Action} from "redux-actions";
import {Rate} from "../model";
import {getTimeoutSetting} from "../../settings/state/selectors";

const sockets = new Map<string, SocketIOClient.Socket>();

export const currencyMiddleware  = state => next => (action: Action<any>) => {
    const {dispatch, getState} = state;
    const {type} = action;

    // todo Сделать так, чтобы нельзя было добовлять одинаковые пары в список
    if (type === AddToCurrencyPairListActionType) {
        const currencyPair = action.payload;
        const connection = io('prices-server-mock.spotware.com:8084');

        connection.on('connect', () => {
            let updateTimeout: NodeJS.Timeout = null;
            let isFirsTime = true;

            function updatePrice(newPrice: number) {
                // todo Сделать утильную функцмю, чтобы генерировать айдишник новому Rate
                const newRateId = 'rate' + currencyPair.id;
                const rateToUpdate = rateByIdSelector(state.getState(), newRateId);
                rateToUpdate.value = newPrice;
                dispatch(updateRateAction(rateToUpdate));
                updateTimeout = null;
            }

            connection.on('price-change', (data) => {
                const timeoutSetting = getTimeoutSetting(getState());
                if (isFirsTime) {
                    updatePrice(data.price);
                    isFirsTime  = false;
                }

                if (!updateTimeout) {
                    updateTimeout = setTimeout(() => {
                        updatePrice(data.price)
                    }, timeoutSetting);
                }
            });

            connection.on('unsubscribe-res', (data) => {
                dispatch(deleteRateAction('rate' + currencyPair.id));
                clearTimeout(updateTimeout);
            });
        });

        sockets.set(currencyPair.id, connection);
    }

    if (type === WatchCurrencyPairActionType) {
        const currencyPairId = action.payload;
        const currencyPair = currencyPairByIdSelector(state.getState(), currencyPairId);
        const newRate = new Rate(currencyPair);

        if (!rateByIdSelector(state.getState(), newRate.id)) {
            const connection = sockets.get(currencyPairId);

            connection.emit('subscribe-req', {
                pair: currencyPair.toString().toLowerCase(),
                uid: Math.random(),
            });

            dispatch(addRateAction(newRate));
        }
    }

    if (type === UnwatchCurrencyPairActionType) {
        const currencyPairId = action.payload;
        const currencyPair = currencyPairByIdSelector(state.getState(), currencyPairId);
        const connection = sockets.get(currencyPairId);

        connection.emit('unsubscribe-req', {
            pair: currencyPair.toString().toLowerCase(),
            uid: Math.random(),
        });
    }

    next(action);
};

