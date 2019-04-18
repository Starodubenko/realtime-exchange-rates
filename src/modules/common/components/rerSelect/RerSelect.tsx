import React, {ChangeEvent, PureComponent} from 'react';
import {RerSelectItem} from "./RerSelectItem.model";

import s from './RerSelect.module.scss';


type Props = {
    selectedValue?: RerSelectItem;
    values: RerSelectItem[];
    onSelect: (id: string) => void;
}

interface OwnState {}

export class RerSelect extends PureComponent<Props, OwnState> {

    static defaultProps = {
        selectedValue: {}
    };

    change = (event: ChangeEvent<HTMLSelectElement>) => {
        this.props.onSelect(event.target.value);
    };

    renderList = () => {
        return this.props.values.map(value => (
            <option key={value.id} value={value.id}>{value.text}</option>
        ));
    };

    render() {
        return (
            <div className={s.Root}>
                <select onChange={this.change} value={this.props.selectedValue.id}>
                    <option disabled selected> -- select an option -- </option>
                    {this.renderList()}
                </select>
            </div>
        );
    }
}
