import { createStore } from "vuex";

export default createStore({
  state: {
    api_key: "1698ad14266892027f713998c5613169",
    url_base: "https://api.openweathermap.org/data/2.5/",
    places_api_key: "AIzaSyDejLbYOEsYMKshI1r8vqOREa9Ly_dEwKk",
  },
  mutations: {},
  actions: {},
  modules: {},
  getters: {
    getApiKey: state => {
      return state.api_key;
    },
    urlBase: state => {
      return state.url_base;
    },
    placesApiKey: state => {
      return state.places_api_key;
    }
  }
});
