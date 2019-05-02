import React from "react";
import {Paper} from "@material-ui/core";
import {PeriodSelector} from "../PeriodSelector";

import s from "./SettingList.module.scss";

export const SettingList = () => {
    return (
        <Paper className={s.Root}>
            <div className={s.Row}>
                <span>Data refresh period</span>
                <span><PeriodSelector /></span>
            </div>
        </Paper>
    )
};
