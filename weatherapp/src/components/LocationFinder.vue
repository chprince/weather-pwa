<template>
  <div class="location-finder" v-if="$route.name !== 'Settings'">
    <h2>Location Finder</h2>
    <div class="search-box">
      <input
        type="text"
        name=""
        id=""
        class="search-bar"
        placeholder="Search any city"
        v-model="query"
      />
      <button @click="findLocation(query)" class="search-button">
        <span class="visually-hidden">Search</span>
      </button>
      <div v-if="state.searchResults">
        <select v-model="result" @change="setPreciseLocation(result)">
          <option
            v-for="location in state.searchResults.data"
            v-bind:key="location.id"
            test="my test"
            v-bind:value="{
              lat: location.latitude,
              long: location.longitude,
              name: location.name,
            }"
          >
            {{ location.name }}, {{ location.region }} {{ location.country }}
          </option>
        </select>
      </div>
      <!-- {{query}} -->
    </div>
    <button @click="getUserLocation">Get my location</button>
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
    </div>
  </div>
</template>

<script>
import { reactive } from "vue";

import store from "@/store/index";
import axios from "axios";
import router from "@/router/index";

export default {
  name: "LocationFinder",
  props: {
    msg: String,
  },
  setup() {
    /**
     * Set state
     */
    const state = reactive({
      nearLocations: null,
      preciseLocation: "",
      query: "",
      searchResults: null,
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
            const closestLocation = {
              name: state.nearLocations.data[0].region,
              lat: state.nearLocations.data[0].latitude,
              long: state.nearLocations.data[0].longitude,
            };

            setPreciseLocation(closestLocation);
            // console.log();
          });
      });
    };

    const findLocation = (query) => {
      state.query = query;
      axios.get(store.getters.findLocation + state.query).then((response) => {
        state.searchResults = response.data;
      });
    };

    // Set the exact user location
    const setPreciseLocation = (location) => {
      state.preciseLocation = location;
      console.log(location);
      store.commit("setUserLocation", location);
      router.push("/City");
    };

    return {
      state,
      getUserLocation,
      findLocation,
      setPreciseLocation,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
