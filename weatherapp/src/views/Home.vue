<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <button @click="getUserLocation">Get data</button>
    <div v-if="state.nearLocations">
      <select v-model="city" @change="setPreciseLocation(city)">
        <option
          v-for="location in state.nearLocations.data"
          v-bind:key="location.id"
          test="my test"
          v-bind:value="{
            lat: location.latitude,
            long: location.longitude,
            name: location.name,
          }"
        >
          {{ location.name }}
        </option>
      </select>

      <div v-if="state.preciseLocation">
        {{ state.preciseLocation }}
        <hr />
        <button @click="getWeather">Go</button>
      </div>

      <div v-if="state.weatherResponse">
        <hr />
        {{ state.weatherResponse }}
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import store from "@/store/index";
import axios from "axios";
import { reactive } from "vue";

export default {
  name: "Home",
  components: {},
  methods: {},
  setup() {
    /**
     * Set state
     */
    const state = reactive({
      nearLocations: null,
      preciseLocation: "",
      weatherResponse: null,
    });

    // Get the user's current location based on their IP address
    // To do: Ask for permission
    const getUserLocation = () => {
      const url = "https://api.ipify.org/?format=json";
      axios.get(url).then((response) => {
        store.commit("setUserIP", response.data.ip);

        axios
          .get(store.getters.getUserLocation + store.getters.getUserIP)
          .then((response) => {
            state.nearLocations = response.data;
            console.log(response.data);
          });
      });
    };

    // Set the exact user location
    const setPreciseLocation = (location) => {
      console.log(location);
      state.preciseLocation = location;
    };

    const getWeather = () => {
      const url =
        store.getters.weatherBase +
        "onecall?lat=" +
        state.preciseLocation.lat +
        "&lon=" +
        state.preciseLocation.long +
        "&appid=" +
        store.getters.weatherKey;
      //https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&appid=
      axios.get(url).then((response) => {
        console.log(response);
        state.weatherResponse = response.data;
      });
    };

    return {
      state,
      getUserLocation,
      setPreciseLocation,
      getWeather,
    };
  },
};
</script>
