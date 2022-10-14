// web component
class HelloWorld extends HTMLElement {
  
    constructor() {
      super();
      this.name = 'World';
    }
    
    // component attributes
    static get observedAttributes() {
      return ['name'];
    }
    
    // attribute change
    attributeChangedCallback(property, oldValue, newValue) {
  
      if (oldValue === newValue) return;
      this[ property ] = newValue;
      
    }
    
    // connect component
    connectedCallback() {
        const shadow = this.attachShadow({ mode: 'closed' });

        shadow.innerHTML = `
          <style>
            div {
              text-align: center;
              font-weight: normal;
              padding: 1em;
              margin: 0 0 2em 0;
              background-color: #eee;
              border: 1px solid #666;
            }
          </style>
      
          <div>
            <h1>Hello ${ this.name }!</h1>
            <p>Welcome to our Component</p>
          </div>
          `;
    }
    
  }
  
  // register component
customElements.define( 'hello-world', HelloWorld );