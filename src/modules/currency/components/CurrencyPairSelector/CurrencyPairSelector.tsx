import React, {PureComponent} from 'react';
import {connect} from "react-redux";
import {RerSelect, RerSelectItem} from "../../../common";
import {RootState} from "../../../store";
import {Currency, CurrencyPair} from "../../model";
import {currencyListSelector} from "../../state";

import s from './CurrencyPairSelector.module.scss';


interface InputProps {
    onPairChange: (currencyPair: CurrencyPair) => void,
}

interface StateProps {
    currencyList: Currency[],
}

interface DispatchProps {}

type Props = StateProps & DispatchProps & InputProps

interface OwnState {
    leftSelectedId?: string;
    rightSelectedId?: string;
}

export class CurrencyPairSelectorComponent extends PureComponent<Props, OwnState> {

    static defaultProps = {
        currencyList: []
    };

    state = {
        leftSelectedId: null,
        rightSelectedId: null,
    };

    onLeftSelect = (id: string) => {
        const {rightSelectedId} = this.state;
        const leftSelectedId = id;

        this.setState({leftSelectedId, rightSelectedId});
        this.emitData(leftSelectedId, rightSelectedId);
    };

    onRightSelect = (id: string) => {
        const {leftSelectedId} = this.state;
        const rightSelectedId = id;

        this.setState({leftSelectedId, rightSelectedId});
        this.emitData(leftSelectedId, rightSelectedId);
    };

    getLeftCurrencies = (): RerSelectItem[] => {
        return this.filterById(this.state.rightSelectedId);
    };


    getRightCurrencies = (): RerSelectItem[] => {
        return this.filterById(this.state.leftSelectedId);
    };

    render() {
        return (
            <div className={s.Root}>
                <RerSelect selectedValue={this.state.leftSelectedId} values={this.getLeftCurrencies()} onSelect={this.onLeftSelect}/>
                <RerSelect selectedValue={this.state.rightSelectedId} values={this.getRightCurrencies()} onSelect={this.onRightSelect}/>
            </div>
        );
    }

    // ------------------------------------------ helpers

    emitData = (leftSelectedId: string, rightSelectedId: string) => {
        const leftCurrency = this.props.currencyList.find(currency => currency.id === leftSelectedId);
        const rightCurrency = this.props.currencyList.find(currency => currency.id === rightSelectedId);

        if (leftCurrency && rightCurrency) {
            this.props.onPairChange(new CurrencyPair(leftCurrency, rightCurrency));
        }
    };

    getMappedCurrencies = (): RerSelectItem[] => {
        return this.props.currencyList.map(currency => ({
            id: currency.id,
            text: currency.description,
        }));
    };

    filterById = (id?: string): RerSelectItem[] => {
        return id
            ? this.getMappedCurrencies().filter(currency => currency.id !== id)
            : this.getMappedCurrencies();
    };
}

const mapStateToProps = (state: RootState, ownProps: InputProps): StateProps => {
    return {
        currencyList: currencyListSelector(state),
    };
};

const mapDispatchToProps: DispatchProps = {};

export const CurrencyPairSelector = connect<StateProps, DispatchProps, InputProps, RootState>(mapStateToProps, mapDispatchToProps)(CurrencyPairSelectorComponent);
