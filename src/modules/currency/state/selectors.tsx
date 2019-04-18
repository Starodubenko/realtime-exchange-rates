import {createSelector} from "redux-orm";
import {appStateOrm, dbStateSelector} from "../../store/store.orm";
import {AppState} from "../../common";

export const currencyListSelector = (appState: AppState) => createSelector(
    appStateOrm,
    dbStateSelector,
    session => {
        debugger;
        return session.Currency.all().toRefArray();
    }
)(appState.entities);
