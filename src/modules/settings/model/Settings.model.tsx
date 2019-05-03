import {AbstractEntity, Period, PlainAbstractEntity} from "../../common";

export interface PlainSettings extends PlainAbstractEntity {
    /**
        Rates refresh period
    */
    period: Period;
}

export class Settings extends AbstractEntity implements PlainSettings{
    period: Period;

    constructor(id: string, period: Period) {
        super(id);
        this.period = period;
    }

    toPlainObject(): PlainSettings {
        return {
            id: this.id,
            period: this.period,
        }
    }
}
