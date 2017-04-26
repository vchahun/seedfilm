import Ember from 'ember';

export default Ember.Route.extend({
    i18n: Ember.inject.service(),
    translationFetcher: Ember.inject.service(),

    beforeModel() {
        //this.set('i18n.locale', 'fr');
        return this.get('translationFetcher').fetch();
    },

});
