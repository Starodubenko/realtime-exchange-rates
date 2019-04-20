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

    constructor(primaryCurrency: Currency, secondaryCurrency: Currency) {
        super(primaryCurrency.id + secondaryCurrency.id);
        this.primaryCurrency = primaryCurrency;
        this.secondaryCurrency = secondaryCurrency;
    }

    toString() {
        return this.primaryCurrency.name.toUpperCase() + this.secondaryCurrency.name.toUpperCase();
    }
}
