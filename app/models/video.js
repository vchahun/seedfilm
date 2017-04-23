import DS from 'ember-data';

export default DS.Model.extend({
    name: DS.attr(),
    title: DS.attr(),
    lang: DS.attr(),
    latinName: DS.attr(),
    family: DS.attr(),
    vimeoId: DS.attr()
});
