import {createSelector} from "redux-orm";
import {appStateOrm, dbStateSelector} from "../../../store/store.orm";
import {RootState} from "../../../store";

export const currencyListSelector = (appState: RootState) => createSelector(
    appStateOrm,
    dbStateSelector,
    session => session.Currency.all().toRefArray()
)(appState.entities);
