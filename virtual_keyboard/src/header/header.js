export class Header {
    constructor(parent) {
     
      this.root = document.createElement('div');
      this.root.classList.add('logo-name');
      this.name = document.createElement('h1');
      this.name.innerHTML = 'RSS Virtual Keyboard';
      this.root.append(this.name);
  
      parent.append(this.root)
    }
  }