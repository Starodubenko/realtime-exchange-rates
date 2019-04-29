import {AbstractEntity, Period} from "../../common";

export interface Settings extends AbstractEntity {
    /**
        Rates refresh period
    */
    period: Period;
}
