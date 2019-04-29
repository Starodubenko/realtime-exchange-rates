import React, {Component} from 'react';
import {connect} from "react-redux";
import {SettingList} from "../../../../settings";
import {
    addToCurrencyPairList, CurrencyPair,
    CurrencyPairList,
    currencyPairListSelector,
    CurrencyPairSelector, Rate, rateListSelector
} from "../../../../currency";
import {RootState} from "../../../../store";

import s from './MainPage.module.scss';
import {RateList} from "../../../../currency/components/RateList";


interface InputProps {
}

interface StateProps {
    currencyPairList: CurrencyPair[];
    rateList: Rate[];
}

interface DispatchProps {
    addToCurrencyPairList: any;
}

type Props = StateProps & DispatchProps & InputProps

interface OwnState {
    selectedPairIds: CurrencyPair
}

export class MainPageComponent extends Component<Props, OwnState> {

    static defaultProps = {};

    state = {
        selectedPairIds: null
    };

    onPairChange = (currencyPair: CurrencyPair) => {
        this.setState({
            selectedPairIds: currencyPair
        })
    };

    addSelectedCurrencyPair = () => {
        this.props.addToCurrencyPairList(this.state.selectedPairIds);
        this.setState({
            selectedPairIds: null
        })
    };

    isPairSelected = (): boolean => {
        return !this.state.selectedPairIds;
    };

    render() {
        return (
            <div className={s.Root}>
                <SettingList/>
                <div>
                    <CurrencyPairSelector onPairChange={this.onPairChange}/>
                    <button disabled={this.isPairSelected()}
                            onClick={this.addSelectedCurrencyPair}>Add
                    </button>
                    <CurrencyPairList items={this.props.currencyPairList}/>
                    <RateList list={this.props.rateList}/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state: RootState, ownProps: InputProps): StateProps => {
    return {
        currencyPairList: currencyPairListSelector(state),
        rateList: rateListSelector(state)
    };
};

const mapDispatchToProps: DispatchProps = {
    addToCurrencyPairList
};

export const MainPage = connect<StateProps, DispatchProps, InputProps, RootState>(mapStateToProps, mapDispatchToProps)(MainPageComponent);

