import Ember from 'ember';

export default Ember.Route.extend({
    model(params) {
        return this.get('store').query('video', {
            filter: {
                name: params.videoName
            }
        }).then((videos) => videos.get('firstObject'));
    }
});
