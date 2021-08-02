import { Text, Parameter } from './models';

export class TextSpec extends Text {
    constructor() {
        const id = "\"Hello,_World!\"_program";
        const keywords = [
            "Hello World (disambiguation)",
            "programming languages",
            "computer program",
            "sanity test",
            "syntax"
        ]
        const text = {
            "description": "Traditional beginners' computer program",
            "short": "A \"Hello, World!\" program generally is a computer program that outputs or displays the message \"Hello, World!\". Such a program is very simple in most programming languages, and is often used to illustrate the basic syntax of a programming language. It is often the first program written by people learning to code. It can also be used as a sanity test to make sure that a computer language is correctly installed, and that the operator understands how to use it.",
            "title": "\"Hello, World!\" program"
        }
        super(id, text, keywords);
    }
}

export class ParameterSpec extends Parameter {
    constructor() {
        super()
        this.parameter = {
            "use_idf": true,
            "smooth_idf": true,
            "max_feature": 1024,
            "ngram_range_min": 1,
            "ngram_range_max": 1,
            "min_df": 1,
            "max_df": 1.0
        }
    }
}
