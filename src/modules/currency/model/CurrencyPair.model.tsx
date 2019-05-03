import {AbstractEntity, PlainAbstractEntity} from "../../common";
import {Currency} from "./Currency.model";

export interface PlainCurrencyPair extends PlainAbstractEntity {
    /**
     Left currency
     */
    primaryCurrency: Currency;

    /**
     Right currency
     */
    secondaryCurrency: Currency;
}

export class CurrencyPair extends AbstractEntity implements PlainCurrencyPair {
    primaryCurrency: Currency;
    secondaryCurrency: Currency;

    constructor(primaryCurrency: Currency, secondaryCurrency: Currency) {
        super(primaryCurrency.id + secondaryCurrency.id);
        this.primaryCurrency = primaryCurrency;
        this.secondaryCurrency = secondaryCurrency;
    }

    extractUpperCaseCurrencyPairString(): string {
        return this.extractCurrencyPairString().toUpperCase();
    };

    extractLowerCaseCurrencyPairString(): string {
        return this.extractCurrencyPairString().toLowerCase();
    };

    toPlainObject(): PlainCurrencyPair {
        return {
            id: this.id,
            primaryCurrency: this.primaryCurrency,
            secondaryCurrency: this.secondaryCurrency,
        };
    }

    private extractCurrencyPairString(): string {
        return this.primaryCurrency.name + this.secondaryCurrency.name;
    };
}
