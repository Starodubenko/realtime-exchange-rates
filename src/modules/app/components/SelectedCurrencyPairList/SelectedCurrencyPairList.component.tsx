import React, {PureComponent} from "react";
import {connect} from "react-redux";
import {RootState} from "../../../store";
import {CurrencyPair} from "../../../currency/model";

import s from "./SelectedCurrencyPairList.module.scss";

interface InputProps {
    list: CurrencyPair[]
}

interface StateProps {
}

interface DispatchProps {
}

type Props = StateProps & DispatchProps & InputProps

interface OwnState {
}

class SelectedCurrencyPairListComponent extends PureComponent<Props, OwnState> {

    static defaultProps = {};

    renderList = () => {
        return this.props.list.map(row => {
            return (
                <div key={row.id} className={s.Row}>
                    <div>{row.toString()}</div>
                    <div><button>Watch</button></div>
                </div>
            )
        })
    };

    render() {
        return (
            <div className={s.Root}>
                {this.renderList()}
            </div>
        );
    }
}

const mapStateToProps = (state: RootState, ownProps: InputProps): StateProps => {
    return {};
};

const mapDispatchToProps: DispatchProps = {};

export const SelectedCurrencyPairList = connect<StateProps, DispatchProps, InputProps, RootState>(mapStateToProps, mapDispatchToProps)(SelectedCurrencyPairListComponent);
