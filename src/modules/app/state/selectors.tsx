import {createSelector} from "redux-orm";
import {appStateOrm, dbStateSelector} from "../../store/store.orm";
import {RootState} from "../../store";
import {CurrencyPair} from "../../currency/model";

//todo Переделать, через связи сушностей и избавиться от CurrencyPairsIds
export const currencyPairListSelector = (appState: RootState) => createSelector(
    appStateOrm,
    dbStateSelector,
    session => {
        debugger;
        return session.SelectedCurrencyPair.all().toRefArray().map(pair => {
            const primary = session.Currency.withId(pair.primaryCurrencyId).ref;
            const secondary = session.Currency.withId(pair.secondaryCurrencyId).ref;
            debugger;
            return new CurrencyPair(pair.id, primary, secondary)
        });
    }
)(appState.entities);
