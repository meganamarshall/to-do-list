import Component from './Component.js';
import Header from './Header.js';

class App extends Component {
  onRender(dom) {
    const header = new Header();
    dom.prepend(header.renderDOM());
  }

  renderHTML() {
    return /*html*/`
      <div>
        <main>
          <p>this is my page</p>
        </main>
      </div>
    `;
  }
}

export default App;
