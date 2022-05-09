 import { Component } from "../../component.js";
 
 export class Screen extends Component {
    constructor(parent) {
        super(parent, 'div', ['screen-wrapper']);
        this.textArea = new Component(this.root, 'textarea', ['class-textarea'])
        this.textArea.root.setAttribute('placeholder', 'Введите ваш текст')
    }

    addText(data) {
        if (!['big', 'extrabig', 'not'].includes(data.data.type)) this.textArea.root.innerHTML += data.name;
        if (data.data.code === 'Tab') this.textArea.root.innerHTML += '    '
    }
} 