'use strict';

class Options {
    constructor (height, width, bg, fontSize, textAlign) {
        this.height = height; 
        this.width = width;
        this.bg = bg;
        this.fontSize = fontSize;
        this.textAlign = textAlign;
    }
    createDiv() {
        let div = document.createElement('div');
        document.body.appendChild(div);
        let parameters = `height:${this.height}px; 
                        width:${this.width}px; 
                        background-color:${this.bg}; 
                        font-size:${this.fontSize}px; 
                        text-align:${this.textAlign};`;
        div.style.cssText = parameters;
    }
}

const element = new Options (40, 30, "blue", 14, "center");
element.createDiv();