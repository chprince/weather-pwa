<template>
  <div class="about">
    <h1>{{ $store.getters.userLocation.name }}</h1>
    <button @click="saveLocation">Save Location</button>
    <WeatherResults />
  </div>
</template>

<script>
// @ is an alias to /src

import { reactive } from "vue";

import store from "@/store/index";
import WeatherResults from "@/components/WeatherResults";

export default {
  name: "Home",
  components: {
    WeatherResults,
  },
  methods: {},
  setup() {
    store.commit("initialiseStore");

    const saveLocation = () => {
      store.commit("saveLocation", store.getters.userLocation);
    };

    /**
     * Set state
     */
    const state = reactive({});

    return {
      state,
      saveLocation,
    };
  },
};
</script>
