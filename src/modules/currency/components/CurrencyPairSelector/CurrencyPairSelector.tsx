import React, {PureComponent} from 'react';
import {connect} from "react-redux";
import {RootState} from "../../../common";

import s from './CurrencyPairSelector.module.scss';
import {RerSelect, RerSelectItem} from "../../../common/components/rerSelect";
import {Currency} from "../../model";
import {currencyListSelector} from "../../state/selectors";


interface InputProps {
    onPairChange: (primaryCurrencyId: string, secondaryPairId: string) => void,
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
        this.props.onPairChange(leftSelectedId, rightSelectedId);
    };

    onRightSelect = (id: string) => {
        const {leftSelectedId} = this.state;
        const rightSelectedId = id;

        this.setState({leftSelectedId, rightSelectedId});
        this.props.onPairChange(leftSelectedId, rightSelectedId);
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
                <RerSelect values={this.getLeftCurrencies()} onSelect={this.onLeftSelect}/>
                <RerSelect values={this.getRightCurrencies()} onSelect={this.onRightSelect}/>
            </div>
        );
    }

    // ------------------------------------------ helpers

    getMappedCurrencies = (): RerSelectItem[] => {
        return this.props.currencyList.map(currency => new RerSelectItem(currency.id, currency.description));
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
