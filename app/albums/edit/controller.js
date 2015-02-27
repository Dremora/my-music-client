import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {
    save: function () {
      this.get('model').save().then(() => {
        this.transitionToRoute('albums.view', this.get('model'))
      })
    },

    addSource: function () {
      let model = this.get('model')
      let sources = model.get('sources')
      if (!sources) {
        model.set('sources', [])
        sources = model.get('sources')
      }
      sources.createFragment({})
    }
  }

});
