<template>
  <div class="about">
    <h1>{{ $store.getters.userLocation.name }}</h1>
    <button v-if="!state.isSavedLocation" @click="saveLocation">
      Save Location
    </button>
    <button v-if="state.isSavedLocation" @click="deleteLocation">
      Delete Location
    </button>
    <WeatherResults />
  </div>
</template>

<script>
// @ is an alias to /src

import { reactive } from "vue";

import store from "@/store/index";
import router from "@/router/index";
import WeatherResults from "@/components/WeatherResults";

export default {
  name: "Home",
  components: {
    WeatherResults,
  },
  methods: {},
  setup() {
    // store.commit("initialiseStore");

    /**
     * Set state
     */
    const state = reactive({
      isSavedLocation: false,
      previousLocations: store.getters.previousLocations,
    });

    const userHasData = () => {
      if (!store.getters.userLocation) {
        router.push("/");
      }
    };

    const checkIsSaved = () => {
      for (let value of store.getters.previousLocations) {
        if (value.name == store.getters.userLocation.name) {
          state.isSavedLocation = true;
          break;
        }
      }
    };

    const deleteLocation = () => {
      for (let value of store.getters.previousLocations) {
        if (value.name == store.getters.userLocation.name) {
          let previousLocations = state.previousLocations;
          let index = previousLocations.indexOf(value);
          previousLocations.splice(index, 1);
          store.commit("overriteSavedLocations", previousLocations);
          state.isSavedLocation = false;
          break;
        }
      }
    };

    const saveLocation = () => {
      if (state.isSavedLocation === false) {
        state.isSavedLocation = true;
        store.commit("saveLocation", store.getters.userLocation);
      }
    };

    userHasData();
    checkIsSaved();

    return {
      state,
      checkIsSaved,
      saveLocation,
      userHasData,
      deleteLocation,
    };
  },
};
</script>
