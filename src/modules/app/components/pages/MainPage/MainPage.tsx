import React, {Component} from 'react';
import {connect} from "react-redux";
import {SettingList} from "../../../../settings";
import {CurrencyPairSelector} from "../../../../currency";
import {RootState} from "../../../../store";

import s from './MainPage.module.scss';
import {addToCurrencyPairList, currencyPairListSelector} from "../../../state";
import {CurrencyPairIdsDto} from "../../../model";
import {SelectedCurrencyPairList} from "../../SelectedCurrencyPairList";


interface InputProps {
}

interface StateProps {
    currencyPairList: any
}

interface DispatchProps {
    addToCurrencyPairList: any;
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
        this.props.addToCurrencyPairList(this.state.selectedPairIds);
    };

    render() {
        return (
            <div className={s.Root}>
                <SettingList/>
                <div>
                    <CurrencyPairSelector onPairChange={this.onPairChange}/>
                    <button onClick={this.addSelectedCurrencyPair}>Add</button>
                    <SelectedCurrencyPairList list={this.props.currencyPairList}/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state: RootState, ownProps: InputProps): StateProps => {
    return {
        currencyPairList: currencyPairListSelector(state)
    };
};

const mapDispatchToProps: DispatchProps = {
    addToCurrencyPairList
};

export const MainPage = connect<StateProps, DispatchProps, InputProps, RootState>(mapStateToProps, mapDispatchToProps)(MainPageComponent);

