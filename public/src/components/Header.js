import Component from './Component.js';

class Header extends Component {
  renderHTML() {
    const title = this.props.title || 'My To Do List';

    return /*html*/`
      <header>
        <h1>${title}</h1>
      </header>
    `;
  }
}

export default Header;
