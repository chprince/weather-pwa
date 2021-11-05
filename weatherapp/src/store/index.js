import { createStore } from "vuex";
//https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&appid=
export default createStore({
  state: {
    api_key: "1698ad14266892027f713998c5613169",
    url_base: "https://api.openweathermap.org/data/2.5/",
    geo_api_key: "e5aaa55ccda78d1400fa7cd1c6e1c65f",
    geo_base: "http://api.positionstack.com/v1/",
    proxy_url: "https://cors-anywhere.herokuapp.com/",
    user_ip: "",
    user_location: "",
    previous_locations: [],
    weather_response: null,
  },
  mutations: {
    initialiseStore(state) {
      // Check if the ID exists
      if (localStorage.getItem('userLocation')) {
        state.user_location = JSON.parse(localStorage.getItem('userLocation'))
      }


      if (localStorage.getItem('previousLocations')) {
        state.previous_locations = JSON.parse(localStorage.getItem('previousLocations'))
      }

      if (localStorage.getItem('weatherResponse')) {
        state.weather_response = localStorage.getItem('weatherResponse');
      }
    },
    setUserIP(state, ip) {
      state.user_ip = ip;
    },
    setUserLocation(state, location) {
      state.user_location = location;
      localStorage.setItem('userLocation', JSON.stringify(location));
    },
    saveLocation(state, location) {
      state.previous_locations.push(location);
      localStorage.setItem('previousLocations', JSON.stringify(state.previous_locations));
    },
    setWeatherResponse(state, response) {
      state.weather_response = response;
      localStorage.setItem('weatherResponse', JSON.stringify(state.weather_response));
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
    findLocation: state => {
      return state.geo_base + "forward" + "?access_key=" + state.geo_api_key + "&query=";
    },
    getUserIP: state => {
      return state.user_ip;
    },
    userLocation: state => {
      return state.user_location;
    },
    previousLocations: state => {
      return state.previous_locations;
    },
    weatherResponse: state => {
      return state.weather_response;
    }
  }
});
