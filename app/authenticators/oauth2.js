import OAuth2PasswordGrantAuthenticator from 'ember-simple-auth/authenticators/oauth2-password-grant';
import { computed } from '@ember/object';
import { isEmpty } from '@ember/utils';

export default OAuth2PasswordGrantAuthenticator.extend({
  serverTokenEndpoint: 'https://youtrack.adapt.ru/hub/api/rest/oauth2/token',
  clientId: ['d5078712-6492-41b0-ae24-bd670d3ea73f', 'KUVAKI0zzjAI'],

  _clientIdHeader: computed('clientId', function() {
    const clientId = this.get('clientId');
    if (!isEmpty(clientId)) {
      const base64ClientId = window.base64.encode(clientId.join(':'));
      return { Authorization: `Basic ${base64ClientId}` };
    }

    return null;
  }),

  makeRequest(url, data, headers) {
    data.scope='YouTrack';

    return this._super(url, data, headers);
  }
});
