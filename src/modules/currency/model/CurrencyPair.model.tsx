import {AbstractEntity} from "../../common";
import {Currency} from "./Currency.model";

export class CurrencyPair extends AbstractEntity {
    /**
        Left currency
    */
    primaryCurrency: Currency;

    /**
        Right currency
    */
    secondaryCurrency: Currency;

    constructor(id: string, primaryCurrency: Currency, secondaryCurrency: Currency) {
        super(id);
        this.primaryCurrency = primaryCurrency;
        this.secondaryCurrency = secondaryCurrency;
    }

    toString() {
        return this.primaryCurrency.name.toUpperCase() + this.secondaryCurrency.name.toUpperCase();
    }
}
