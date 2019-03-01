export class FormDefinition {
    public id: number;
    public name: string;
    public fields: Array<Field>;

    constructor() {
        this.fields = new Array<Field>();
    }
}

export class Field {
    public id: number;
    public label: string;
    public type: FieldType;
}

export enum FieldType {
    Input = 1,
    Checkbox = 2
}

export class FieldTypeLookup {
    public id: number;
    public name: string;
}
