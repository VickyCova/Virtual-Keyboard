export class Component {  
    constructor(parent, tag = 'div', styles = [], content, attr, attrVal) {
      this.root = document.createElement(tag);
      if (styles.length > 0) this.root.classList.add(...styles);
      if (content) this.root.innerHTML = `${content}`;
      if (attr) this.root.setAttribute(attr, `${attrVal}`);
      if (parent) parent.appendChild(this.root);
    }
  }