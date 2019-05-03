import React, {useEffect, useMemo} from 'react';
import {connect} from "react-redux";
import {ActionFunction0} from "redux-actions";
import {Route, Switch} from "react-router";
import {hasSettings} from "../../../settings/state/selectors";
import {appInitAction} from "../../state";
import {MainPage} from "../pages";
import {RootState} from "../../../store";

import s from './App.module.scss';


interface StateProps {
    hasSettings: boolean;
}

interface DispatchProps {
    appInitAction: ActionFunction0<any>;
}

type Props = StateProps & DispatchProps

const AppComponent = (props: Props) => {
    const renderApp = useMemo(() => props.hasSettings
        ? <Switch>
            <Route exact path="/" component={MainPage}/>
        </Switch>
        : 'PlainSettings are fetching...', [props.hasSettings]);

    useEffect(() => {
        props.appInitAction();
    }, []);

    return (
        <div className={s.Root}>
            {renderApp}
        </div>
    )
};

const mapStateToProps = (state: RootState): StateProps => ({
    hasSettings: hasSettings(state)
});

const mapDispatchToProps: DispatchProps = {
    appInitAction,
};

export const App = connect<StateProps, DispatchProps, any, RootState>(mapStateToProps, mapDispatchToProps)(AppComponent);

