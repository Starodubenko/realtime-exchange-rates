import React, {Component} from 'react';
import {connect} from "react-redux";
import {ActionFunctionAny} from "redux-actions";
import {hasSettings} from "../../../settings/state/selectors";
import {appInitAction} from "../../state";
import {Route, Switch} from "react-router";
import {MainPage} from "../pages/MainPage";
import {RootState} from "../../../store";

import s from './App.module.scss';


interface InputProps {
}

interface StateProps {
    hasSettings: boolean;
}

interface DispatchProps {
    appInitAction: ActionFunctionAny<any>;
}

type Props = StateProps & DispatchProps & InputProps

interface OwnState {
}

export class AppComponent extends Component<Props, OwnState> {

    static defaultProps = {};

    renderApp = () => {
        return this.props.hasSettings
            ? <Switch>
                <Route exact path="/" component={MainPage}/>
              </Switch>
            : 'Settings are fetching...';
    };

    render() {
        return (
            <div className={s.Root}>
                {this.renderApp()}
            </div>
        );
    }

    componentDidMount(): void {
        this.props.appInitAction();
    }
}

const mapStateToProps = (state: RootState, ownProps: InputProps): StateProps => {
    return {
        hasSettings: hasSettings(state)
    };
};

const mapDispatchToProps: DispatchProps = {
    appInitAction,
};

export const App = connect<StateProps, DispatchProps, InputProps, RootState>(mapStateToProps, mapDispatchToProps)(AppComponent);

