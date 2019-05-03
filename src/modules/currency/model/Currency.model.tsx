import {AbstractEntity, PlainAbstractEntity} from "../../common";

export interface PlainCurrency extends PlainAbstractEntity {
    /**
     Symbol name
     */
    name: string;

    /**
     Additional info about currency
     */
    description: string;
}

export class Currency extends AbstractEntity implements PlainCurrency {
    name: string;
    description: string;

    constructor(id: string, name: string, description: string) {
        super(id);
        this.name = name;
        this.description = description;
    }

    toPlainObject(): any {
        return {
            id: this.id,
            name: this.name,
            description: this.description,
        }
    }
}
