import {AbstractEntity} from "../../common";

export class Currency extends AbstractEntity {
    /**
        Symbol name
    */
    name: string;

    /**
        Additional info about currency
    */
    description: string;

    constructor(id: string, name: string, description: string) {
        super(id);
        this.name = name;
        this.description = description;
    }
}
