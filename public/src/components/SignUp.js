import Component from './Component.js';

class SignUp extends Component {

  onRender(form) {
    const onSignUp = this.props.onSignUp;

    form.addEventListener('submit', event => {
      event.preventDefault();

      const formData = new FormData(form);

      const user = {
        displayName: formData.get('display-name'),
        email: formData.get('email'),
        password: formData.get('password')
      };

      onSignUp(user);
    });
  }

  renderHTML() {
    return /*html*/`
      <form class="auth-form standard">
        <p>
          <label for="signup-name">What's your name?</label>
          <input name="display-name" id="display-name" type="text">
        </p>
        <p>
          <label for="signup-email">Email:</label>
          <input name="email" id="signup-email" type="email" required>
        </p>
        <p>
          <label for="signup-password">Password:</label>
          <input name="password" id="signup-password" type="text" required>
        </p>
        <p>
          <button>Sign Me Up!</button>
        </p>
      </form>`;
  }
}

export default SignUp;
