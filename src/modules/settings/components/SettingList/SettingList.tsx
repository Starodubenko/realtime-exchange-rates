import React from "react";
import {PeriodSelector} from "../PeriodSelector";

import s from "./SettingList.module.scss";

export const SettingList = () => {
    return (
        <div className={s.Root}>
            <div className={s.Row}>
                <span>Data refresh period</span>
                <span><PeriodSelector /></span>
            </div>
        </div>
    )
};
