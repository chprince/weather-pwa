import { createStore } from "vuex";
//https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&appid=
export default createStore({
  state: {
    api_key: "1698ad14266892027f713998c5613169",
    url_base: "https://api.openweathermap.org/data/2.5/",
    geo_api_key: "e5aaa55ccda78d1400fa7cd1c6e1c65f",
    geo_base: "http://api.positionstack.com/v1/",
    proxy_url: "https://cors-anywhere.herokuapp.com/",
    user_ip: ""
  },
  mutations: {
    setUserIP(state, ip) {
      state.user_ip = ip;
    },
  },
  actions: {},
  modules: {},
  getters: {
    weatherKey: state => {
      return state.api_key;
    },
    weatherBase: state => {
      return state.url_base;
    },
    geoApiKey: state => {
      return state.places_api_key;
    },
    proxyUrl: state => {
      return state.proxy_url;
    },
    getUserLocation: state => {
      // return state.proxy_url;
      return state.geo_base + "reverse" + "?access_key=" + state.geo_api_key + "&query=";
    },
    getUserIP: state => {
      return state.user_ip;
    },
  }
});
