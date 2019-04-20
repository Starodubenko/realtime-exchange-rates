import {AbstractEntity} from "../../common";

export class CurrencyPairIdsDto extends AbstractEntity{
    primaryCurrencyId: string;
    secondaryCurrencyId: string;
    isWatched = false;

    constructor(primaryCurrencyId: string, secondaryCurrencyId: string) {
        super(primaryCurrencyId + secondaryCurrencyId);
        this.primaryCurrencyId = primaryCurrencyId;
        this.secondaryCurrencyId = secondaryCurrencyId;
    }
}
