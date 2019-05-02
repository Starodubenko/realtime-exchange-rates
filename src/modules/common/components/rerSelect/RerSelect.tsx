import React, {ChangeEvent, useCallback, useMemo} from 'react';
import {RerSelectItem} from "./RerSelectItem.model";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/es/InputLabel";
import Select from "@material-ui/core/es/Select";

import s from './RerSelect.module.scss';

type Props = {
    selectedValue?: string;
    values: RerSelectItem[];
    onSelect: (id: string) => void;
    label?: string;
}

export const RerSelect = (props: Props) => {
    const selectedValue = props.selectedValue ? props.selectedValue : '';

    const options = useMemo(() => {
        return props.values.map(value => (
            <MenuItem key={value.id} value={value.id}>{value.text}</MenuItem>
        ));
    }, [props.values]);

    const onChange = useCallback((event: ChangeEvent<HTMLSelectElement>) => {
        props.onSelect(event.target.value);
    }, []);

    return (
        <div className={s.Root}>
            <InputLabel>{props.label}</InputLabel>
            <Select
                value={selectedValue}
                onChange={onChange}
            >
                {options}
            </Select>
        </div>
    );
};
