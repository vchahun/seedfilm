import DS from 'ember-data';

export default DS.Model.extend({
    lang: DS.attr(),
    key: DS.attr(),
    value: DS.attr()
});
