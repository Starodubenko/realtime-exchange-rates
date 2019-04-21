import {createSelector} from "redux-orm";
import {RootState} from "../../../store/model";
import {appStateOrm, dbStateSelector} from "../../../store/store.orm";
import {CurrencyPair} from "../../model";

export const currencyPairListSelector = (appState: RootState): CurrencyPair[] => createSelector(
    appStateOrm,
    dbStateSelector,
    session => {
        return session.CurrencyPair.all().toModelArray().map(currencyPair => {
            return new CurrencyPair(
                currencyPair.primaryCurrency.ref,
                currencyPair.secondaryCurrency.ref
            );
        });
    }
)(appState.entities);

export const currencyPairByIdSelector = (appState: RootState, id: string): CurrencyPair =>
    currencyPairListSelector(appState)
        .find(pair => pair.id === id);
