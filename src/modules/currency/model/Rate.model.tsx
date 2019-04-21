import {AbstractEntity} from "../../common";
import {CurrencyPair} from "./index";

export class Rate extends AbstractEntity {
    /**
        Couple of currencies against which the rate is calculated
    */
    pair: CurrencyPair;

    /**
        Calculated rate
    */
    value: number;

    constructor(pair: CurrencyPair, value: number = null) {
        super('rate' + pair.id);
        this.pair = pair;
        this.value = value;
    }
}
