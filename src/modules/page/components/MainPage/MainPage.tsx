import React, {Component} from 'react';
import {connect} from "react-redux";
import {SettingList} from "../../../settings/components/SettingList";
import {CurrencyPairSelector} from "../../../currency/components/CurrencyPairSelector";
import {AppState} from "../../../common";

import s from './MainPage.module.scss';


interface InputProps {
}

interface StateProps {}

interface DispatchProps {}

type Props = StateProps & DispatchProps & InputProps

interface OwnState {
}

export class MainPageComponent extends Component<Props, OwnState> {

    static defaultProps = {};

    onPairChange = (primaryCurrencyId: string, secondaryPairId: string) => {
        console.log(primaryCurrencyId + " : " + secondaryPairId);
    };

    render() {
        return (
            <div className={s.Root}>
                <div>
                    <SettingList/>
                    <CurrencyPairSelector onPairChange={this.onPairChange}/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state: AppState, ownProps: InputProps): StateProps => {
    return {};
};

const mapDispatchToProps: DispatchProps = {};

export const MainPage = connect<StateProps, DispatchProps, InputProps, AppState>(mapStateToProps, mapDispatchToProps)(MainPageComponent);

