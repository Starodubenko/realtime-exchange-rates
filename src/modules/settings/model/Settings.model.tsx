import {AbstractEntity} from "../../common";

export class Settings extends AbstractEntity {
    /**
        Rates refresh period
    */
    period: number;

    constructor(id: string, period: number) {
        super(id);
        this.period = period;
    }
}
