<template>
  <div class="home">
    <RecentLocations />
  </div>
</template>

<script>
// @ is an alias to /src

// import store from "@/store/index";
import { reactive } from "vue";

import RecentLocations from "@/components/RecentLocations";

export default {
  name: "Home",
  components: {
    RecentLocations,
  },
  methods: {},
  setup() {
    /**
     * Set state
     */
    const state = reactive({});

    // store.commit("initialiseStore");

    return {
      state,
    };
  },
};
</script>
