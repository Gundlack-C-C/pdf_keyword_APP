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

/**
 * Analytics Models
 */
export class Parameter extends Object {
    parameter: {[key: string]: any} = {};
}

export class CorpusAnalytics extends Object {
    res: TextAnalytics[];
}

export class TextAnalytics extends Object {
    text: string;
    keywords: KeywordAnalytics[];

    constructor(text: string, keywords: KeywordAnalytics[]) {
        super();
        this.text = text;
        this.keywords = keywords;
    }
}

export class KeywordAnalytics extends Object {
    id: number;
    key: string;
    score: number;

    constructor(id: number, key: string, score: number) {
        super();
        this.id = id;
        this.key = key;
        this.score = score;
    }

    static FromResponse(res: any) {
        
    }
}