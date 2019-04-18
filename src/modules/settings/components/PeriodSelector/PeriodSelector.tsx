import React, {ChangeEvent, Component} from 'react';
import {connect} from "react-redux";
import {AppState, Period} from "../../../common";
import {updateSettingsAction} from "../../state/actions";
import {Settings} from "../../model";

import s from './PeriodSelector.module.scss';


interface InputProps {}

interface StateProps {}

interface DispatchProps {
    updateSettingsAction: any;
}

type Props = StateProps & DispatchProps & InputProps

interface OwnState {}

export class PeriodSelectorComponent extends Component<Props, OwnState> {

    static defaultProps = {};

    change = (event: ChangeEvent<HTMLSelectElement>) => {
        this.props.updateSettingsAction(new Settings('mySettings', +event.target.value));
    };

    render() {
        return (
            <div className={s.Root}>
                <select onChange={this.change}>
                    <option value={Period.OneSecond}>1 second</option>
                    <option value={Period.FiveSeconds}>5 second</option>
                </select>
            </div>
        );
    }
}

const mapStateToProps = (state: AppState, ownProps: InputProps): StateProps => {
    return {};
};

const mapDispatchToProps: DispatchProps = {
    updateSettingsAction,
};

export const PeriodSelector = connect<StateProps, DispatchProps, InputProps, AppState>(mapStateToProps, mapDispatchToProps)(PeriodSelectorComponent);
