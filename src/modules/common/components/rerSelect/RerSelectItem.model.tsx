import {AbstractEntity} from "../../model";

export class RerSelectItem extends AbstractEntity {
    text: string;

    constructor(id: string, text: string) {
        super(id);
        this.text = text;
    }
}
