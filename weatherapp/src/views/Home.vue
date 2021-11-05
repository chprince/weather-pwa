<template>
  <div class="home">
    <LocationFinder />
    <RecentLocations />
  </div>
</template>

<script>
// @ is an alias to /src

import store from "@/store/index";
import { reactive } from "vue";

import LocationFinder from "@/components/LocationFinder";
import RecentLocations from "@/components/RecentLocations";

export default {
  name: "Home",
  components: {
    LocationFinder,
    RecentLocations,
  },
  methods: {},
  setup() {
    /**
     * Set state
     */
    const state = reactive({});

    store.commit("initialiseStore");

    return {
      state,
    };
  },
};
</script>
