import React, {PureComponent} from "react";
import {connect} from "react-redux";
import {AppState} from "../../../common";

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

const mapStateToProps = (state: AppState, ownProps: InputProps): StateProps => {
  return {};
};

const mapDispatchToProps: DispatchProps = {};

export const SelectedCurrencyPairList = connect<StateProps, DispatchProps, InputProps, AppState>(mapStateToProps, mapDispatchToProps)(SelectedCurrencyPairListComponent);
