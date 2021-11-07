<template>
  <div class="settings">
    <h1>Settings</h1>
    <p>User settings can be toggled here.</p>
    <div id="v-model-radiobutton">
      <p>Unit Type</p>
      <input
        type="radio"
        id="one"
        value="Metric"
        v-model="state.unitType"
        :checked="$store.getters.userUnits === 'metric'"
        @change="changeUnits"
      />
      <label for="one">Metric</label>
      <br />
      <input
        type="radio"
        id="two"
        value="Imperial"
        v-model="state.unitType"
        :checked="$store.getters.userUnits === 'imperial'"
        @change="changeUnits"
      />
      <label for="two">Imperial</label>
      <br />
    </div>
    <button @click="clearCache">Clear cached data</button>
    <p>This will clear all user data including saved locations.</p>
  </div>
</template>

<script>
// @ is an alias to /src

import store from "@/store/index";
import { reactive } from "vue";

export default {
  name: "Settings",

  components: {},
  methods: {},
  setup() {
    /**
     * Set state
     */
    const state = reactive({
      unitType: "Metric",
    });

    const changeUnits = () => {
      store.commit("setUserUnits", state.unitType.toLowerCase());
    };

    const clearCache = () => {
      localStorage.clear();
      window.alert("Saved data has been deleted");
    };
    //

    // store.commit("initialiseStore");

    return {
      state,
      changeUnits,
      clearCache,
    };
  },
};
</script>
