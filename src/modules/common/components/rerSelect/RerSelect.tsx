import React, {ChangeEvent, useCallback, useMemo} from 'react';
import {RerSelectItem} from "./RerSelectItem.model";

import s from './RerSelect.module.scss';

type Props = {
    selectedValue?: RerSelectItem;
    values: RerSelectItem[];
    onSelect: (id: string) => void;
}

export const RerSelect = (props: Props) => {
    const selectedValue = useMemo(() => {
        return props.selectedValue ? props.selectedValue.id : 'default';
    }, [props.selectedValue]);

    const options = useMemo(() => {
        return props.values.map(value => (
            <option key={value.id} value={value.id}>{value.text}</option>
        ));
    }, [props.values]);

    const onChange = useCallback((event: ChangeEvent<HTMLSelectElement>) => {
        props.onSelect(event.target.value);
    }, []);

    return (
        <div className={s.Root}>
            <select onChange={onChange} value={selectedValue}>
                <option disabled value={'default'}> -- select an option -- </option>
                {options}
            </select>
        </div>
    );
};
