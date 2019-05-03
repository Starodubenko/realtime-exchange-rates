import React, {memo, useCallback, useMemo} from "react";
import {connect} from "react-redux";
import Paper from '@material-ui/core/Paper';
import Button from "@material-ui/core/Button";
import {Action, ActionFunction1} from "redux-actions";
import {RootState} from "../../../store";
import {CurrencyPair} from "../../model";
import {watchRateAction} from "../../state";

import s from "./CurrencyPairList.module.scss";

interface InputProps {
    items: CurrencyPair[]
}

interface StateProps {
}

interface DispatchProps {
    watchRateAction: ActionFunction1<string, Action<string>>;
}

type Props = DispatchProps & InputProps

const CurrencyPairListComponent = memo((props: Props) => {
    const watchRate = useCallback((id) => () => {
        props.watchRateAction(id);
    }, []);

    const list = useMemo(() => props.items.map(row => {
        const pairString = row.extractUpperCaseCurrencyPairString();

        return (
            <Paper key={row.id} className={s.Row}>
                <div className={s.PairString}>{pairString}</div>
                <Button variant="contained"
                        color="primary"
                        onClick={watchRate(row.id)}>
                    Watch
                </Button>
            </Paper>
        )
    }), [props.items]);

    return (
        <div className={s.Root}>
            {list}
        </div>
    )
});

const mapDispatchToProps: DispatchProps = {
    watchRateAction
};

export const CurrencyPairList = connect<StateProps, DispatchProps, InputProps, RootState>(null, mapDispatchToProps)(CurrencyPairListComponent);
