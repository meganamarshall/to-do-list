import Component from './Component.js';


class ToDoForm extends Component {

  onRender(dom) {
    const onAdd = this.props.onAdd;
    const form = dom.querySelector('form');
    const input = dom.querySelector('input[name=to-do]');
    const error = dom.querySelector('p.error');
  

    form.addEventListener('submit', () => {
      event.preventDefault();

      const toDo = {
        item: input.value
      };

      error.textContent = '';
      
      onAdd(toDo) 
        .then(() => {
          form.reset();
          document.activeElement.blur();
        })
        .catch(err => {
          error.textContent = err;
        });
    });
  }
  renderHTML() {
    return /*html*/`
      <section class="to-do-form-section">
        <form class="form">
          <input name="to-do" required>
          <button>Add</button>
        </form>
        <p class="error"></p>
      </section>
    `;
  }
}

export default ToDoForm;
