import {AbstractEntity, PlainAbstractEntity} from "../../common";
import {CurrencyPair, PlainCurrencyPair} from "./index";

export interface PlainRate extends PlainAbstractEntity {
    /**
     Couple of currencies against which the rate is calculated
     */
    pair: PlainCurrencyPair;

    /**
     Calculated rate
     */
    value?: number;
}

export class Rate extends AbstractEntity implements PlainRate {
    pair: CurrencyPair;
    value: number;

    constructor(pair: CurrencyPair, value: number = null) {
        super('rate' + pair.id);
        this.pair = pair;
        this.value = value;
    }

    toPlainObject(): PlainRate {
        return {
            id: this.id,
            pair: this.pair.toPlainObject(),
            value: this.value,
        }
    }
}
