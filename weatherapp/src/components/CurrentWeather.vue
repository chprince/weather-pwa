<template>
  <div class="current-weather" v-if="data">
    <ul>
      <li>Sunsrise: {{ $filters.timeMinute(data.sunrise, timezone) }}</li>
      <li>Sunsrise: {{ $filters.timeMinute(data.sunset, timezone) }}</li>
      <li>Temp: {{ data.temp }} (c)</li>
      <li>Feels like: {{ data.feels_like }} (c)</li>
      <li>Pressure: {{ data.pressure }}</li>
      <li>Humidity: {{ data.humidity }}</li>
      <li>Dew point {{ data.dew_point }}</li>
      <li>UVI: {{ data.uvi }}</li>
      <li>Clouds: {{ data.clouds }}</li>
      <li>Visibility: {{ data.visibility }}</li>
      <li>Wind Speed: {{ data.wind_speed }}</li>
      <li>Wind Direction: {{ data.wind_deg }} (TODO - convert to direction)</li>
      <li>Wind Gust: {{ data.wind_gust }}</li>
      <li>
        Weather:
        {{ data.weather[0].main }}
      </li>
      <li>
        Weather icon:
        <img
          :src="
            'http://openweathermap.org/img/wn/' +
            data.weather[0].icon +
            '@2x.png'
          "
        />
        <br />Weather icons can be found here:
        <a href="https://openweathermap.org/weather-conditions"
          >https://openweathermap.org/weather-conditions</a
        >
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "CurrentWeather",
  props: {
    data: Object,
    timezone: String,
  },
};
</script>