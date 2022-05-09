import { Header } from "./src/header/header.js";
import { Main } from "./src/main/main.js";

export class App {
  constructor() {
    this.header = new Header(document.body);
    this.main = new Main(document.body);

    window.onkeydown = (e) => this.main.keyboard.downBtnState(e);
    window.onkeyup = (e) => this.main.keyboard.upBtnState(e);
  }
}


const app =  new App();