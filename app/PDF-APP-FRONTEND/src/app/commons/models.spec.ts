import { Text } from './models';

export class TextSpec extends Text {
    constructor() {
        super();
        super.id = "\"Hello,_World!\"_program";
        this.keywords = [
            "Hello World (disambiguation)",
            "programming languages",
            "computer program",
            "sanity test",
            "syntax"
        ]
        this.text = {
            "description": "Traditional beginners' computer program",
            "short": "A \"Hello, World!\" program generally is a computer program that outputs or displays the message \"Hello, World!\". Such a program is very simple in most programming languages, and is often used to illustrate the basic syntax of a programming language. It is often the first program written by people learning to code. It can also be used as a sanity test to make sure that a computer language is correctly installed, and that the operator understands how to use it.",
            "title": "\"Hello, World!\" program"
        }
    }
}