import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  login: '',
  password: '',

  session: service(),

  actions: {
    authenticate() {
      this.set('errorMessage', null);
      let { login, password } = this.getProperties('login', 'password');
      this.get('session').authenticate('authenticator:oauth2', login, password).then(() => this.transitionToRoute('index')).catch((reason) => {
        if (reason) {
          this.set('errorMessage', reason.error_description || reason.error || reason);
        } else {
          this.set('errorMessage', 'unknown error');
        }
      });
    }
  }
});
