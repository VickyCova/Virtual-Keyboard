import { Component } from "../../component.js";
import { Button } from "./button/button.js";
import { keys } from "./keys.js";

export class Keyboard extends Component {
  constructor(parent) {
    super(parent, "div", ["keyboard-wrapper"]);
    this.addBtns();
    this.alt = false;
    this.caps = false;
    new Component(parent, 'p', ['keyboard-text'], 'Alt + Shift - переключение языка')
  }

  addBtns() {
    const lines = new Array(5)
      .fill(0)
      .map((_) => new Component(this.root, "div", ["keys-line"]));

    this.btns = keys.map((el, i) => {
      let line = 0;
      if (i >= 0 && i < 14) {
        line = 0;
      } else if (i > 13 && i < 28) {
        line = 1;
      } else if (i > 27 && i < 41) {
        line = 2;
      } else if (i > 40 && i < 54) {
        line = 3;
      } else {
        line = 4;
      }

      const btn = new Button(lines[line].root, el);
      btn.addChar = (data) => this.addChar(data);
       if (el.code === 'CapsLock') {
          btn.kb = this;
      }

      return btn;      
    });
  }

  downBtnState(e) {
    if (!this.btns.find(el => el.code === e.code)) return;
    this.checkExtraKeys(e, true);
    const activeBtn = this.btns.find((el) => el.code === e.code);
    activeBtn.getActive();    
  }

  upBtnState(e) {
    if (!this.btns.find(el => el.code === e.code)) return;
    this.checkExtraKeys(e, false);
    const activeBtn = this.btns.find((el) => el.code === e.code);
    activeBtn.getUnActive();
  }

  checkExtraKeys(e, press) {
    if (e.code.slice(0, 3) === "Alt") {
      e.preventDefault();
      this.alt = press;
    }

    if (e.code === "Tab") {
      e.preventDefault();      
    }

    if (e.code.slice(0, 5) === "Shift" && press && this.alt) {
      e.preventDefault();
      const storLang = window.localStorage.getItem('KbLang');
      if (storLang == 'en') {
        window.localStorage.setItem('KbLang', 'ru')
    } else {
        window.localStorage.setItem('KbLang', 'en')
    };
      this.swithLanguage(window.localStorage.getItem('KbLang'));
    }

    if (e.code === 'CapsLock' && press) {
        this.changeBtnsSize(press);
    }
  }

  swithLanguage(lang) {
    this.btns.forEach(el => el.switchLang(lang));    
  }

  

  changeBtnsSize() {
    this.caps = !this.caps;    
    const capsBtn = this.btns.find(el => el.code === 'CapsLock');
    capsBtn.upDown(this.btns);
  }
}
