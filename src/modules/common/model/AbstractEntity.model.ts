export interface PlainAbstractEntity {
    id: string;
}

export abstract class AbstractEntity implements PlainAbstractEntity {
    id: string;

    constructor(id: string) {
        this.id = id;
    }

    abstract toPlainObject(): any;
}
