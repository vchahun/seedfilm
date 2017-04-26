import Ember from 'ember';

export default Ember.Service.extend({
    i18n: Ember.inject.service(),
    store: Ember.inject.service(),

    fetch() {
        return this.get('store').findAll('text')
            .then(this._addTranslations.bind(this));
    },

    _addTranslations(texts) {
        const translations = {};
        texts.forEach(function(text) {
            let lang = text.get('lang');
            if(!translations[lang])
                translations[lang] = {};
            translations[lang][text.get('key')] = text.get('value');
        });
        for(var lang in translations)
            this.get('i18n').addTranslations(lang, translations[lang]);
    }
});
