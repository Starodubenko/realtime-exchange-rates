import React, {PureComponent} from "react";
import {connect} from "react-redux";
import {RootState} from "../../../store";
import {Rate} from "../../model";
import {unwatchRateAction} from "../../state";

import s from "./RateList.module.scss";

interface InputProps {
    list: Rate[]
}

interface StateProps {
}

interface DispatchProps {
    unwatchRateAction: any;
}

type Props = StateProps & DispatchProps & InputProps

interface OwnState {
}

class RateListComponent extends PureComponent<Props, OwnState> {

    static defaultProps = {};

    unwatchRate = (id) => () => {
        this.props.unwatchRateAction(id);
    };

    renderList = () => {
        return this.props.list.map(row => {
            return (
                <div key={row.id} className={s.Row}>
                    <div>{row.pair.toString()}</div>
                    <div>{row.value}</div>
                    <button onClick={this.unwatchRate(row.pair.id)}>Remove</button>
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

const mapDispatchToProps: DispatchProps = {
    unwatchRateAction
};

export const RateList = connect<StateProps, DispatchProps, InputProps, RootState>(mapStateToProps, mapDispatchToProps)(RateListComponent);
