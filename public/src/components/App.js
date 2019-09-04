import Component from './Component.js';
import Header from './Header.js';
import ToDoForm from './ToDoForm.js';

class App extends Component {
  onRender(dom) {
    const header = new Header();
    dom.prepend(header.renderDOM());
    const form = new ToDoForm();
    dom.appendChild(form.renderDOM());
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
