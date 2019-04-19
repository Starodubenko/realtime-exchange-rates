import React, {PureComponent} from "react";
import {connect} from "react-redux";
import {PeriodSelector} from "../PeriodSelector";
import {RootState} from "../../../store/model";

import s from "./SettingList.module.scss";

interface InputProps {}

interface StateProps {}

interface DispatchProps {}

type Props = StateProps & DispatchProps & InputProps

interface OwnState {}

export class SettingListComponent extends PureComponent<Props, OwnState> {

  static defaultProps = {};

  render() {
    return (
        <div className={s.Root}>
          <div className={s.Row}>
            <span>Data refresh period</span>
            <span><PeriodSelector /></span>
          </div>
        </div>
    );
  }
}

const mapStateToProps = (state: RootState, ownProps: InputProps): StateProps => {
  return {};
};

const mapDispatchToProps: DispatchProps = {};

export const SettingList = connect<StateProps, DispatchProps, InputProps, RootState>(mapStateToProps, mapDispatchToProps)(SettingListComponent);
