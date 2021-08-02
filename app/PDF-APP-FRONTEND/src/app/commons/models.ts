export class Text extends Object {
    id: string = "";
    text: {[key: string]: string} = {};
    keywords: string[] = [];

    constructor(id: string, text: {[key: string]: string}, keywords: string[]) {
        super()
        this.id = id;
        this.text = text;
        this.keywords = keywords
    }

    get Title(): string {
        return this.text['title'];
    }

    set Title(val: string) {
        this.text['title'] = val;
    }

    get Short(): string {
        return this.text['short'];
    }

    set Short(val: string) {
        this.text['short'] = val;
    }

    get Description(): string{
        return this.text['description'];
    }
    set Description(val: string) {
        this.text['description'] = val;
    }
}

export class Parameter extends Object {
    parameter: {[key: string]: any} = {}
}
