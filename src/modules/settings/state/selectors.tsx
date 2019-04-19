import {createSelector} from "redux-orm";
import {appStateOrm, dbStateSelector} from "../../store/store.orm";
import {RootState} from "../../store";

export const settingListSelector = (appState: RootState) => createSelector(
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

export const settingByIdSelector = (appState: RootState, id: string) => createSelector(
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

export const settingByKeySelector = (appState: RootState, id: string, settingKey: string) => createSelector(
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

export const hasSettings = (appState: RootState) => createSelector(
    appStateOrm,
    dbStateSelector,
    session => session.Setting.all().toRefArray().length
)(appState.entities);
