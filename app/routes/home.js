import Ember from 'ember';

export default Ember.Route.extend({
    i18n: Ember.inject.service(),

    beforeModel() {
        console.log('home:beforeModel', this.get('i18n.locale'));
        let families = [];
        let videos = {};
        let self = this;
        let q = {
            filter: {
                lang: this.get('i18n.locale')
            }
        };
        this.get('store').query('video', q)
            .then(function(videoList) {
            videoList.forEach(function(video) {
                let family = video.get('family');
                if(families.indexOf(family) == -1) {
                    families.push(family);
                    videos[family] = [];
                }
                videos[family].push(video);
            });
        self.set('families', families);
        self.set('videos', videos);
        });
        this.set('lang', this.get('i18n.locale'));
    },

    model() {
        return this;
    }
});
