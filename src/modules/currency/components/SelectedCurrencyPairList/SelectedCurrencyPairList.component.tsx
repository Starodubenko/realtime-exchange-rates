import React, {PureComponent} from "react";
import {connect} from "react-redux";
import {RootState} from "../../../store";

import s from "./SelectedCurrencyPairList.module.scss";

interface InputProps {}

interface StateProps {}

interface DispatchProps {}

type Props = StateProps & DispatchProps & InputProps

interface OwnState {}

class SelectedCurrencyPairListComponent extends PureComponent<Props, OwnState> {

  static defaultProps = {};

  render() {
    return (
        <div className={s.Root}>
          <div className={s.Row}>

          </div>
        </div>
    );
  }
}

const mapStateToProps = (state: RootState, ownProps: InputProps): StateProps => {
  return {};
};

const mapDispatchToProps: DispatchProps = {};

export const SelectedCurrencyPairList = connect<StateProps, DispatchProps, InputProps, RootState>(mapStateToProps, mapDispatchToProps)(SelectedCurrencyPairListComponent);
