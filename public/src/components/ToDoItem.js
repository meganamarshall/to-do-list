import Component from './Component.js';

class ToDoItem extends Component {
  onRender(dom) {
    const item = this.props.item;
    const onUpdate = this.props.onUpdate;
    const onRemove = this.props.onRemove;

    const completeButton = dom.querySelector('.complete-button');
    completeButton.addEventListener('click', () => {
      item.complete = !item.incomplete;
      onUpdate(item);
    });
    const removeButton = dom.querySelector('.remove-button');
    removeButton.addEventListener('click', () => {
      onRemove(item);
    });
  }

  renderHTML() {
    const item = this.props.item;

    return /*html*/`
    <li class="one-item">
      <span class="${item.complete ? 'complete' : ''}">{item.name}</span>
      <div>
        <button class="complete-button">
        Mark ${item.complete ? 'Incomplete' : 'Complete'}
        </button>
        <button class="remove-button">Remove Item</button>
      </div>
    </li>
    `;
  }
}

export default ToDoItem;
