import React, {memo, useCallback, useMemo} from "react";
import {connect} from "react-redux";
import Paper from '@material-ui/core/Paper';
import Button from "@material-ui/core/Button";
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
    watchRateAction: any;
}

type Props = DispatchProps & InputProps

const CurrencyPairListComponent = memo((props: Props) => {
    const watchRate = useCallback((id) => () => {
        props.watchRateAction(id);
    }, []);

    const list = useMemo(() => {
        return props.items.map(row => {
            return (
                <Paper key={row.id} className={s.Row}>
                    <div>{row.toString()}</div>
                    <Button variant="contained"
                            color="primary"
                            onClick={watchRate(row.id)}>
                        Watch
                    </Button>
                </Paper>
            )
        })
    }, [props.items]);

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
