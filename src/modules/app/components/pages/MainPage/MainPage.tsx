import React, {useCallback, useMemo, useState} from 'react';
import {connect} from "react-redux";
import {SettingList} from "../../../../settings";
import {
    addToCurrencyPairList,
    CurrencyPair,
    CurrencyPairList,
    currencyPairListSelector,
    CurrencyPairSelector,
    Rate,
    rateListSelector
} from "../../../../currency";
import {RootState} from "../../../../store";
import {RateList} from "../../../../currency/components/RateList";

import s from './MainPage.module.scss';

interface StateProps {
    currencyPairList: CurrencyPair[];
    rateList: Rate[];
}

interface DispatchProps {
    addToCurrencyPairList: any;
}

type Props = StateProps & DispatchProps

export const MainPageComponent = (props: Props) => {
    const [selectedPairIds, setSelectedPairIds] = useState(null);
    const onPairChange = useCallback((currencyPair: CurrencyPair) => {
        setSelectedPairIds(currencyPair);
    }, []);
    const addSelectedCurrencyPair = useCallback(() => {
        props.addToCurrencyPairList(selectedPairIds);
        setSelectedPairIds(null);
    }, [selectedPairIds]);
    const isPairSelected = useMemo((): boolean => !selectedPairIds, [selectedPairIds]);

    return (
        <div className={s.Root}>
            <SettingList/>
            <div>
                <CurrencyPairSelector onPairChange={onPairChange}/>
                <button disabled={isPairSelected}
                        onClick={addSelectedCurrencyPair}>Add
                </button>
                <CurrencyPairList items={props.currencyPairList}/>
                <RateList list={props.rateList}/>
            </div>
        </div>
    )
};

const mapStateToProps = (state: RootState): StateProps => ({
    currencyPairList: currencyPairListSelector(state),
    rateList: rateListSelector(state)
});

const mapDispatchToProps: DispatchProps = {
    addToCurrencyPairList
};

export const MainPage = connect<StateProps, DispatchProps, any, RootState>(mapStateToProps, mapDispatchToProps)(MainPageComponent);

