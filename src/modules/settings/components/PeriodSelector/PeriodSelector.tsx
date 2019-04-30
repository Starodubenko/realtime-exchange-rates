import React, {ChangeEvent, useCallback} from 'react';
import {connect} from "react-redux";
import {Action, ActionFunction1} from "redux-actions";
import {Period} from "../../../common";
import {Settings} from "../../model";
import {RootState} from "../../../store";
import {updateSettingsAction} from "../../state";

import s from './PeriodSelector.module.scss';


interface DispatchProps {
    updateSettingsAction: ActionFunction1<Settings, Action<Settings>>;
}

type Props = DispatchProps

const PeriodSelectorComponent = (props: Props) => {
    const change = useCallback(
        (event: ChangeEvent<HTMLSelectElement>) => {
            props.updateSettingsAction({
                id: 'mySettings',
                period: +event.target.value,
            });
        },
        [],
    );

    return (
        <div className={s.Root}>
            <select onChange={change}>
                <option value={Period.OneSecond}>1 second</option>
                <option value={Period.FiveSeconds}>5 second</option>
            </select>
        </div>
    );
};

const mapDispatchToProps: DispatchProps = {
    updateSettingsAction,
};

export const PeriodSelector = connect<any, DispatchProps, any, RootState>(null, mapDispatchToProps)(PeriodSelectorComponent);
