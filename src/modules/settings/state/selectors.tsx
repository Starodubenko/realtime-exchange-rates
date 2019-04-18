import {createSelector} from "redux-orm";
import {appStateOrm, dbStateSelector} from "../../store/store.orm";
import {AppState} from "../../common";

export const settingListSelector = (appState: AppState) => createSelector(
    appStateOrm,
    dbStateSelector,
    session => {
        // @ts-ignore
        return session.Book.all().map(setting => {
            const obj = setting.ref;

            return Object.assign({}, obj, {
                authors: setting.authors.toRefArray().map(author => author.name),
            });
        });
    }
)(appState.entities);

export const settingByIdSelector = (appState: AppState, id: string) => createSelector(
    appStateOrm,
    dbStateSelector,
    session => {
        const model = session.Book.withId(id);
        const obj = model.ref;

        return Object.assign({}, obj, {
            authors: model.authors.toRefArray().map(author => author.name),
        });
    }
)(appState.entities);

export const settingByKeySelector = (appState: AppState, id: string, settingKey: string) => createSelector(
    appStateOrm,
    dbStateSelector,
    session => {
        const model = session.Book.withId(id);
        const obj = model.ref;

        return Object.assign({}, obj, {
            authors: model.authors.toRefArray().map(author => author.name),
        });
    }
)(appState.entities);

export const hasSettings = (appState: AppState) => createSelector(
    appStateOrm,
    dbStateSelector,
    session => session.Setting.all().toRefArray().length
)(appState.entities);
