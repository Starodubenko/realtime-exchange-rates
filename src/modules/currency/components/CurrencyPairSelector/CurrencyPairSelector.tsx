import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {connect} from "react-redux";
import {RerSelect, RerSelectItem} from "../../../common";
import {RootState} from "../../../store";
import {Currency, CurrencyPair} from "../../model";
import {currencyListSelector} from "../../state";

import s from './CurrencyPairSelector.module.scss';


interface InputProps {
    onPairChange: (currencyPair: CurrencyPair) => void,
}

interface StateProps {
    currencyItems: Currency[],
}

type Props = StateProps & InputProps;

const getMappedCurrencies = (currencyItems: Currency[]): RerSelectItem[] => {
    return currencyItems.map(currency => ({
        id: currency.id,
        text: currency.description,
    }));
};

const filteredByIdCurrencies = (currencyItems: Currency[], id?: string): RerSelectItem[] => {
    return id
        ? getMappedCurrencies(currencyItems).filter(currency => currency.id !== id)
        : getMappedCurrencies(currencyItems);
};

const CurrencyPairSelectorComponent = (props: Props) => {
    const [leftId, setLeftId] = useState(null);
    const [rightId, setRightId] = useState(null);
    const leftCurrencies = useMemo((): RerSelectItem[] => filteredByIdCurrencies(props.currencyItems, rightId), [props.currencyItems, rightId]);
    const rightCurrencies = useMemo((): RerSelectItem[] => filteredByIdCurrencies(props.currencyItems, leftId), [props.currencyItems, leftId]);

    const onLeftSelect = useCallback((id: string) => {
        setLeftId(id);
    }, []);

    const onRightSelect = useCallback((id: string) => {
        setRightId(id);
    }, []);

    useEffect(() => {
        const primaryCurrency = props.currencyItems.find(currency => currency.id === leftId);
        const secondaryCurrency = props.currencyItems.find(currency => currency.id === rightId);

        if (primaryCurrency && secondaryCurrency) {
            props.onPairChange(new CurrencyPair(primaryCurrency, secondaryCurrency));
        }
    }, [leftId, rightId]);

    return (
        <div className={s.Root}>
            <RerSelect selectedValue={leftId} values={leftCurrencies} onSelect={onLeftSelect}/>
            <RerSelect selectedValue={rightId} values={rightCurrencies} onSelect={onRightSelect}/>
        </div>
    );
};

const mapStateToProps = (state: RootState): StateProps => ({
    currencyItems: currencyListSelector(state),
});

export const CurrencyPairSelector = connect<StateProps, any, InputProps, RootState>(mapStateToProps)(CurrencyPairSelectorComponent);
