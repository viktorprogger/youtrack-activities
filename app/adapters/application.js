import DS from 'ember-data';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';

const { RESTAdapter } = DS;

export default RESTAdapter.extend(DataAdapterMixin, {
  host: 'https://192.168.0.67:8080',
  namespace: '/hub',
  authorizer: 'authorizer:oauth2',
  authenticator: 'authenticator:oauth2',
});
