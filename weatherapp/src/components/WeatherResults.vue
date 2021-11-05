<template>
  <div>
    <button @click="getWeather">Get weather</button>
    <div v-if="state.weatherResponse">
      <Accordion>
        <template v-slot:title>
          <span>Rain next hour by minute</span>
        </template>
        <template v-slot:content>
          <MinuteForecast :data="state.weatherResponse.minutely" />
        </template>
      </Accordion>
    </div>
  </div>
</template>

<script>
import store from "@/store/index";
import axios from "axios";

import { reactive } from "vue";

import MinuteForecast from "@/components/MinuteForecast";
import Accordion from "@/components/base/Accordion";

export default {
  name: "WeatherResults",
  props: {
    msg: String,
  },
  components: {
    MinuteForecast,
    Accordion,
  },
  setup() {
    /**
     * Set state
     */
    const state = reactive({
      weatherResponse: store.getters.weatherResponse,
    });

    const getWeather = () => {
      const url =
        store.getters.weatherBase +
        "onecall?lat=" +
        store.getters.userLocation.lat +
        "&lon=" +
        store.getters.userLocation.long +
        "&units=metric" +
        "&appid=" +
        store.getters.weatherKey;
      axios.get(url).then((response) => {
        console.log(response);
        state.weatherResponse = response.data;
        store.commit("setWeatherResponse", response.data);
      });
    };

    return {
      state,
      getWeather,
    };
  },
};
</script>