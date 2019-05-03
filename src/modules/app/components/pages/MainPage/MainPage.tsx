import React, {useCallback, useMemo, useState} from 'react';
import {connect} from "react-redux";
import Button from '@material-ui/core/Button';
import {Action, ActionFunction1} from "redux-actions";
import {SettingList} from "../../../../settings";
import {
    addToCurrencyPairList,
    CurrencyPair,
    CurrencyPairList,
    currencyPairListSelector,
    CurrencyPairSelector,
    PlainCurrencyPair,
    Rate,
    RateList,
    rateListSelector
} from "../../../../currency";
import {RootState} from "../../../../store";

import s from './MainPage.module.scss';

interface StateProps {
    currencyPairList: CurrencyPair[];
    rateList: Rate[];
}

interface DispatchProps {
    addToCurrencyPairList: ActionFunction1<PlainCurrencyPair, Action<CurrencyPair>>;
}

type Props = StateProps & DispatchProps

export const MainPageComponent = (props: Props) => {
    const [selectedPairIds, setSelectedPairIds] = useState<CurrencyPair>(null);
    const onPairChange = useCallback((currencyPair: CurrencyPair) => {
        setSelectedPairIds(currencyPair);
    }, []);
    const addSelectedCurrencyPair = useCallback(() => {
        props.addToCurrencyPairList(selectedPairIds.toPlainObject());
        setSelectedPairIds(null);
    }, [selectedPairIds]);
    const isPairSelected = useMemo((): boolean => !selectedPairIds, [selectedPairIds]);

    return (
        <div className={s.Root}>
            <div className={s.Settings}>
                <SettingList/>
            </div>
            <div className={s.Lists}>
                <div className={s.CurrencyPairList}>
                    <CurrencyPairList items={props.currencyPairList}/>
                </div>
                <div className={s.ListDivider} />
                <div className={s.RateLists}>
                    <RateList list={props.rateList}/>
                </div>
            </div>
            <div className={s.CurrencyPairSelector}>
                <CurrencyPairSelector onPairChange={onPairChange}/>
                <Button variant="contained"
                        color="primary"
                        disabled={isPairSelected}
                        onClick={addSelectedCurrencyPair}>
                    Add
                </Button>
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

