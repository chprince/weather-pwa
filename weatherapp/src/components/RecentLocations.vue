<template>
  <div class="previous-locations" v-if="$store.getters.previousLocations">
    <h2>Saved locations</h2>
    <ul>
      <li
        v-for="location in $store.getters.previousLocations"
        :key="location.name"
      >
        {{ location.name }}
      </li>
    </ul>
    <hr />
  </div>
</template>

<script>
import { reactive } from "vue";

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

    return {
      state,
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
