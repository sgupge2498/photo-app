import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    images: []
  },
  mutations: {
    addImage(state, image) {
      state.images.push(image);
    }
  },
  actions: {
    uploadImage({ commit }, image) {
      commit('addImage', image);
    }
  },
  getters: {
    allImages: state => state.images
  }
});
