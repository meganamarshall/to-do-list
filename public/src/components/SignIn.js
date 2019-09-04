import Component from './Component.js';

class SignIn extends Component {

  onRender(form) {
    const onSignIn = this.props.onSignIn;

    form.addEventListener('submit', event => {
      event.preventDefault();

      const formData = new FormData(form);

      const creds = {
        email: formData.get('email'),
        password: formData.get('password')
      };

      onSignIn(creds);
    });
  }

  renderHTML() {
    return /*html*/`
      <form class="auth-form standard">
        <p>
          <label for="signin-email">Email:</label>
          <input name="email" id="signin-email" type="email" required>
        </p>
        <p>
          <label for="signin-password">Password:</label>
          <input name="password" id="signin-password" type="text" required>
        </p>
        <p>
          <button>Sign Me In!</button>
        </p>
      </form>`;
  }
}

export default SignIn;
