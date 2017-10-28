import {Element as PolymerElement}
  from '../node_modules/@polymer/polymer/polymer-element.js';

export class MyApp extends PolymerElement {
  static get template(){
    return `<div class='test'>This is my first element [[name]]</div>`
  }

  constructor(){
    super();
    this.name = 'kkkkkkkkkkkkkkkkkk';
  }

  static get properties(){
    name: {
      Type: String
    }
  }
}

customElements.define('my-app', MyApp);
