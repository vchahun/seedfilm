import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
    location: config.locationType,
    rootURL: config.rootURL
});

Router.map(function() {
    // TODO voir https://discuss.emberjs.com/t/how-to-architect-multilanguage-routes-with-i18n/9747
    this.route('home', {path: '/:lang/home'})
    this.route('contact', {path: '/:lang/contact'});
    this.route('video.show', {path: '/:lang/video/:videoName'});
});

export default Router;
