import React, {ChangeEvent, useCallback} from 'react';
import {connect} from "react-redux";
import {Period} from "../../../common";
import {Settings} from "../../model";
import {RootState} from "../../../store";
import {updateSettingsAction} from "../../state";

import s from './PeriodSelector.module.scss';
import {Action, ActionFunction1} from "redux-actions";


interface InputProps {}

interface StateProps {}

interface DispatchProps {
    updateSettingsAction: ActionFunction1<Settings, Action<Settings>>;
}

type Props = StateProps & DispatchProps & InputProps

interface OwnState {}

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

const mapStateToProps = (state: RootState, ownProps: InputProps): StateProps => {
    return {};
};

const mapDispatchToProps: DispatchProps = {
    updateSettingsAction,
};

export const PeriodSelector = connect<StateProps, DispatchProps, InputProps, RootState>(mapStateToProps, mapDispatchToProps)(PeriodSelectorComponent);
