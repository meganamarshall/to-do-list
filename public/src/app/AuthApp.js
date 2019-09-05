import Component from '../components/Component.js';
import SignUp from '../components/SignUp.js';
import SignIn from '../components/SignIn.js';
import { signUp as userSignUp, signIn as userSignIn } from '../services/list-api.js';
import store from '../services/store.js';

function success(user) {
  store.setToken(user.token);
  const searchParams = new URLSearchParams(location.search);
  location = searchParams.get('redirect') || './index.html';
}

class AuthApp extends Component {
  
  onRender(dom) {
    const errors = dom.querySelector('.errors');
    const signUpContainer = dom.querySelector('#signup-container');
    const signInContainer = dom.querySelector('#signin-container');

    const signUp = new SignUp({
      onSignUp: newUser => {
        errors.textContent = '';

        return userSignUp(newUser)
          .then(user => {
            success(user);
          })
          .catch(err => {
            errors.textContent = err;
          });
      }
    });
    signUpContainer.appendChild(signUp.renderDOM());

    const signIn = new SignIn({
      onSignIn: creds => {
        errors.textContent = '';

        return userSignIn(creds) 
          .then(user => {
            success(user);
          })
          .catch(err => {
            errors.textContent = err;
          });
      }
    });
    signInContainer.appendChild(signIn.renderDOM());

    const switchToSignIn = dom.querySelector('#signin-button');
    switchToSignIn.addEventListener('click', () => {
      signInContainer.classList.remove('no-display');
      signUpContainer.classList.add('no-display');
    });

    const switchToSignUp = dom.querySelector('#signup-container');
    switchToSignUp.addEventListener('click', () => {
      signUpContainer.classList.remove('no-display');
      signInContainer.classList.add('no-display');
    });
  }

  renderHTML() {
    return /*html*/`
      <div>
        <main>
          <p class="errors"></p>
          <section class="no-display" id="signup-container">
            <p class="switch">
              <button id="signin-button">Already a User?</button>
            </p>
          </section>
          <section id="signin-container">
            <p class="switch">
              <button id="signout-button">Need to Create an Account?</button>
            </p>
          </section>
        </main>
      </div>`
  }
}

export default AuthApp;
