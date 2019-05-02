import React, {useCallback} from 'react';
import {connect} from "react-redux";
import {Action, ActionFunction1} from "redux-actions";
import {Period, RerSelect, RerSelectItem} from "../../../common";
import {Settings} from "../../model";
import {RootState} from "../../../store";
import {updateSettingsAction} from "../../state";

import s from './PeriodSelector.module.scss';
import {getTimeoutSetting} from "../../state/selectors";


const values: RerSelectItem[] = [
    {
        id: Period.OneSecond.toString(),
        text: '1 second'
    },
    {
        id: Period.FiveSeconds.toString(),
        text: '5 seconds'
    },
];

interface StateProps {
    period: Period,
}

interface DispatchProps {
    updateSettingsAction: ActionFunction1<Settings, Action<Settings>>;
}

type Props = StateProps & DispatchProps;

const PeriodSelectorComponent = (props: Props) => {
    const onChange = useCallback(
        (period: string) => {
            props.updateSettingsAction({
                id: 'mySettings',
                period: +period,
            });
        },
        [],
    );

    return (
        <div className={s.Root}>
            <RerSelect selectedValue={props.period.toString()}
                       values={values}
                       onSelect={onChange}
            />
        </div>
    );
};

const mapStateToProps = (state: RootState) => ({
    period: getTimeoutSetting(state),
});

const mapDispatchToProps: DispatchProps = {
    updateSettingsAction,
};

export const PeriodSelector = connect<any, DispatchProps, any, RootState>(mapStateToProps, mapDispatchToProps)(PeriodSelectorComponent);
