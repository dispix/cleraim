import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('projets');
  this.route('workshops');
  this.route('persos');
});

export default Router;
