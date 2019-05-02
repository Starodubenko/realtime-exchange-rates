import React, {useCallback, useMemo} from "react";
import {connect} from "react-redux";
import Paper from "@material-ui/core/Paper";
import {Button} from "@material-ui/core";
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
    // todo Убрать any и поставить нормальный тип
    unwatchRateAction: any;
}

type Props = StateProps & DispatchProps & InputProps

const RateListComponent = (props: Props) => {

    const unwatchRate = useCallback((id) => () => {
        props.unwatchRateAction(id);
    }, []);

    const renderList = useMemo(() => props.list.map(row => {
        const rateValue = row.value && row.value.toFixed(2);

        return (
            <Paper key={row.id} className={s.Row}>
                <div className={s.PairString}>{row.pair.toString()}</div>
                <div>{rateValue}</div>
                <Button variant="contained"
                        color="secondary"
                        onClick={unwatchRate(row.pair.id)}>
                    Remove
                </Button>
            </Paper>
        )
    }), [props.list]);

    return (
        <div className={s.Root}>
            {renderList}
        </div>
    );
};

const mapDispatchToProps: DispatchProps = {
    unwatchRateAction
};

export const RateList = connect<StateProps, DispatchProps, InputProps, RootState>(null, mapDispatchToProps)(RateListComponent);
