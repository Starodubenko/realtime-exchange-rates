import React, {useCallback, useMemo} from "react";
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

const RateListComponent = (props: Props) => {

    const unwatchRate = useCallback((id) => () => {
        props.unwatchRateAction(id);
    }, []);

    const renderList = useMemo(() => {
        return props.list.map(row => {
            return (
                <div key={row.id} className={s.Row}>
                    <div>{row.pair.toString()}</div>
                    <div>{row.value}</div>
                    <button onClick={unwatchRate(row.pair.id)}>Remove</button>
                </div>
            )
        })
    }, [props.list]);

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
