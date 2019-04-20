import {AbstractEntity} from "../../common";
import {CurrencyPair} from "../../currency/model";

export class Rate extends AbstractEntity {
    /**
        Couple of currencies against which the rate is calculated
    */
    pair: CurrencyPair;

    /**
        Calculated rate text
    */
    value: number;

    constructor(id: string, pair: CurrencyPair, value: number) {
        super(id);
        this.pair = pair;
        this.value = value;
    }
}
