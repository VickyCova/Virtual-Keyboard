import { Screen } from "./screen/screen.js";
import { Keyboard } from "./keyboard/keyboard.js";
import { Component } from "../component.js";

export class Main extends Component {
  constructor(parent) {
    super(parent, "main", ["main-class"]);
    this.screen = new Screen(this.root);
    this.keyboard = new Keyboard(this.root);
    this.keyboard.addChar = (data) => {
      this.screen.addText(data);
    };

    this.checkLang();
  }

  checkLang() {
    const storage = window.localStorage;
    if (!storage.getItem("KbLang")) return;
    if (storage.getItem("KbLang") == "ru") {
        this.keyboard.swithLanguage('ru') 
    }
  }
}
