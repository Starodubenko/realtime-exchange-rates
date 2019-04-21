import {createSelector} from "redux-orm";
import {RootState} from "../../../store/model";
import {appStateOrm, dbStateSelector} from "../../../store/store.orm";
import {CurrencyPair, Rate} from "../../model";

export const rateListSelector = (appState: RootState): Rate[] => createSelector(
    appStateOrm,
    dbStateSelector,
    session => {
        return session.Rate.all().toModelArray().map(rate => {
            const primaryCurrency = rate.pair.primaryCurrency.ref;
            const secondaryCurrency = rate.pair.secondaryCurrency.ref;
            return new Rate(
                new CurrencyPair(primaryCurrency, secondaryCurrency),
                rate.value
            );
        });
    }
)(appState.entities);

export const rateByIdSelector = (appState: RootState, id: string): Rate =>
    rateListSelector(appState)
        .find(rate => rate.id === id);
