<template>
  <div class="location-finder">
    <h2>Location Finder</h2>

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
          });
      });
    };

    // Set the exact user location
    const setPreciseLocation = (location) => {
      console.log(location);
      state.preciseLocation = location;
      store.commit("setUserLocation", location);
      router.push("/City");
    };

    return {
      state,
      getUserLocation,
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
