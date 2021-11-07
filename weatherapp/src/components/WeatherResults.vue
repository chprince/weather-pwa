<template>
  <div>
    <div v-if="state.weatherResponse">
      <div v-if="state.weatherResponse.current">
        Local date/time:
        {{
          $filters.localDate(
            state.weatherResponse.current.dt,
            state.weatherResponse.timezone
          )
        }}
      </div>

      <Accordion>
        <template v-slot:title>
          <span>Current Weather</span>
        </template>
        <template v-slot:content>
          <CurrentWeather
            :data="state.weatherResponse.current"
            :timezone="state.weatherResponse.timezone"
          />
        </template>
      </Accordion>

      <Accordion>
        <template v-slot:title>
          <span>Rain next hour by minute</span>
        </template>
        <template v-slot:content>
          <MinuteForecast
            :data="state.weatherResponse.minutely"
            :timezone="state.weatherResponse.timezone"
          />
        </template>
      </Accordion>

      <Accordion>
        <template v-slot:title>
          <span>Hourly Forecast</span>
        </template>
        <template v-slot:content>
          <HourForecast
            :data="state.weatherResponse.hourly"
            :timezone="state.weatherResponse.timezone"
          />
        </template>
      </Accordion>

      <Accordion>
        <template v-slot:title>
          <span>Daily Forecast</span>
        </template>
        <template v-slot:content>
          <DayForecast
            :data="state.weatherResponse.daily"
            :timezone="state.weatherResponse.timezone"
          />
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
import HourForecast from "@/components/HourForecast";
import DayForecast from "@/components/DayForecast";
import CurrentWeather from "@/components/CurrentWeather";
import Accordion from "@/components/base/Accordion";

export default {
  name: "WeatherResults",
  props: {
    msg: String,
  },
  components: {
    MinuteForecast,
    HourForecast,
    DayForecast,
    Accordion,
    CurrentWeather,
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
        state.weatherResponse = response.data;
        store.commit("setWeatherResponse", response.data);
      });
    };

    getWeather();

    return {
      state,
      getWeather,
    };
  },
};
</script>