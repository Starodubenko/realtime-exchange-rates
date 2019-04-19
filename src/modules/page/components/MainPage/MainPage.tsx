import React, {Component} from 'react';
import {connect} from "react-redux";
import {SettingList} from "../../../settings/components/SettingList";
import {CurrencyPairSelector} from "../../../currency/components/CurrencyPairSelector";
import {RootState} from "../../../common";
import {CurrencyPairIdsDto} from "../../../currency/model";

import s from './MainPage.module.scss';


interface InputProps {
}

interface StateProps {
}

interface DispatchProps {
    addSelectedCurrencyPair: any;
}

type Props = StateProps & DispatchProps & InputProps

interface OwnState {
    selectedPairIds: CurrencyPairIdsDto
}

export class MainPageComponent extends Component<Props, OwnState> {

    static defaultProps = {};

    state = {
        selectedPairIds: new CurrencyPairIdsDto(null, null)
    };

    onPairChange = (primaryCurrencyId: string, secondaryPairId: string) => {
        this.setState({
            selectedPairIds: new CurrencyPairIdsDto(primaryCurrencyId, secondaryPairId)
        })
    };

    addSelectedCurrencyPair = () => {
        this.props.addSelectedCurrencyPair(this.state.selectedPairIds);
    };

    render() {
        return (
            <div className={s.Root}>
                <SettingList/>
                <div>
                    <CurrencyPairSelector onPairChange={this.onPairChange}/>
                    <button onClick={this.addSelectedCurrencyPair}>Add</button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state: RootState, ownProps: InputProps): StateProps => {
    return {};
};

const mapDispatchToProps: DispatchProps = {
    addSelectedCurrencyPair: () => {}
};

export const MainPage = connect<StateProps, DispatchProps, InputProps, RootState>(mapStateToProps, mapDispatchToProps)(MainPageComponent);

