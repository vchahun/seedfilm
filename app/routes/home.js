import Ember from 'ember';

export default Ember.Route.extend({
    init() {
        let families = [];
        let videos = {};
        let self = this;
        this.get('store').findAll('video').then(function(videoList) {
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
    },

    model() {
        return this;
    }
});
