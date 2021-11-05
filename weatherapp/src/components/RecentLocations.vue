<template>
  <div class="previous-locations" v-if="$store.getters.previousLocations">
    <h2>Saved locations</h2>
    <ul>
      <li
        v-for="location in $store.getters.previousLocations"
        :key="location.name"
      >
        <button @click="setPreciseLocation(location)">
          {{ location.name }}
        </button>
      </li>
    </ul>
    <hr />
  </div>
</template>

<script>
import { reactive } from "vue";
import store from "@/store/index";
import router from "@/router/index";

export default {
  name: "RecentLocations",
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

    // Set the exact user location
    const setPreciseLocation = (location) => {
      store.commit("setUserLocation", location);
      router.push("/City");
    };

    return {
      state,
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
// ul {
//   list-style-type: none;
//   padding: 0;
// }
// li {
//   display: inline-block;
//   margin: 0 10px;
// }
a {
  color: #42b983;
}
</style>
