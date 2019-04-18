import {AbstractEntity, Period} from "../../common";

export class Settings extends AbstractEntity {
    /**
        Rates refresh period
    */
    period: Period;

    constructor(id: string, period: number) {
        super(id);
        this.period = period;
    }
}
