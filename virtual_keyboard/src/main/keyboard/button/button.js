import { Component } from "../../../component.js";

export class Button extends Component {
  constructor(parent, data) {
    super(parent, "a", ["square_btn"], data.en);
    this.code = data.code;
    this.data = data;
    this.eng = true;
    this.name = data.en;
    this.root.onmousedown = () => this.getActive();
    this.root.onmouseup = () => this.getUnActive();
    this.root.onmousemove = () => {
      if (this.data.code != "CapsLock")
        this.root.classList.remove("square_btn_active");
    };

    if (data.type === "big") this.root.classList.add("big");
    if (data.type === "extrabig") this.root.classList.add("extra-big");

    if (data.code === "CapsLock") {
      this.root.onclick = () => this.capsChange();
      this.upDown = (btns) => {
        btns.forEach((el) => el.changeSize(this.kb.caps));
        if (this.kb.caps) {
          this.root.classList.add("square_btn_active");
        } else {
          this.root.classList.remove("square_btn_active");
        }
      };
    }
  }

  getActive() {
    if (this.data.code != "CapsLock")
      this.root.classList.add("square_btn_active");
    this.addChar({ name: this.name, data: this.data });
  }

  getUnActive() {
    if (this.data.code != "CapsLock")
      this.root.classList.remove("square_btn_active");
  }

  switchLang(lang) {    
    if (lang == "ru") {
      this.eng = false;
    }

    if (lang == "en") {
      this.eng = true;
    }

    if (this.data.code.slice(0, 3) != "Key") return;
    if (this.eng) {
      this.root.innerHTML = (this.data.en || this.data.ru).toLowerCase();
      this.eng = false;
      this.name = this.data.en;
    } else {
      this.root.innerHTML = (this.data.ru || this.data.en).toLowerCase();
      this.eng = true;
      this.name = this.data.ru;
    }
  }

  changeSize(isBig) {
    if (this.data.code.slice(0, 3) != "Key") return;
    if (isBig) {
      this.name = this.name.toUpperCase();
      this.root.innerHTML = this.name;
    } else {
      this.name = this.name.toLowerCase();
      this.root.innerHTML = this.name;
    }
  }

  capsChange() {
    console.log(1);
    if (this.data.code != "CapsLock") return;
    this.kb.caps = !this.kb.caps;
    this.upDown(this.kb.btns);
  }

  addChar() {}
}
