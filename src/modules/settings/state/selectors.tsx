import {createSelector} from "redux-orm";
import {appStateOrm, dbStateSelector} from "../../store/store.orm";
import {RootState} from "../../store";
import {Setting, PlainSettings} from "../model";
import {Period} from "../../common";

export const settingListSelector = (appState: RootState) => createSelector(
    appStateOrm,
    dbStateSelector,
    session => {
        // @ts-ignore
        return session.Setting.all().toRefArray();
    }
)(appState.entities);

export const settingByIdSelector = (appState: RootState, id: string): PlainSettings => settingListSelector(appState).find(item => item.id === id);

export const  settingByKeySelector = <K extends keyof PlainSettings>(appState: RootState, id: string, settingKey: string): PlainSettings[K] => settingByIdSelector(appState, id)[settingKey];

// todo убрать хардкодный айдишник настроек
export const getTimeoutSetting = (appState: RootState, id: string = 'mySettings'): Period => settingByKeySelector<Setting.Period>(appState, id, Setting.Period);

export const hasSettings = (appState: RootState): boolean => createSelector(
    appStateOrm,
    dbStateSelector,
    session => session.Setting.all().toRefArray().length
)(appState.entities);
