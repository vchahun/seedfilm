import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('home');
  this.route('contact');
  this.route('video', function() {
    this.route('show', {path: '/:videoName'})
  });
});

export default Router;
