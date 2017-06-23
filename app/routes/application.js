import Ember from 'ember';

export default Ember.Route.extend({
    i18n: Ember.inject.service(),
    translationFetcher: Ember.inject.service(),

    loadLocale(locale) {
        console.log('Setting locale to', locale);
        this.set('i18n.locale', locale);
        this.set('lang', locale);
        let langs = this.get('allLangs').slice();
        langs.splice(langs.indexOf(locale), 1);
        this.set('availableLanguages', langs);
    },

    beforeModel(transition) {
        let langParam = transition.params[transition.targetName].lang;
        this.loadLocale(langParam || 'en');
        return this.get('translationFetcher').fetch();
    },

    allLangs: ['en', 'fr', 'de'],

    model() {
        return this;
    },

    actions: {
        willTransition(transition) {
            let newLocale = transition.params[transition.targetName].lang;
            console.log('willTransit', newLocale);
            if(newLocale != this.get('i18n.locale')) {
                this.loadLocale(newLocale);
                return this.get('translationFetcher').fetch();
            }
        },
        didTransition() {
            console.log('didTransit', this.get('i18n.locale'))
        }
    }

});
