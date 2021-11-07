<template>
  <div class="day-forecast" v-if="data">
    <ul>
      <li v-for="item in data" :key="item.id">
        {{ $filters.localDate(item.dt, timezone) }}
        <ul>
          <li>Sunsrise: {{ $filters.timeMinute(item.sunrise, timezone) }}</li>
          <li>Sunsrise: {{ $filters.timeMinute(item.sunset, timezone) }}</li>
          <li>Temp: {{ item.temp }} (c)</li>
          <li>Feels like: {{ item.feels_like }} (c)</li>
          <li>Pressure: {{ item.pressure }}</li>
          <li>Humidity: {{ item.humidity }}</li>
          <li>Dew point {{ item.dew_point }}</li>
          <li>UVI: {{ item.uvi }}</li>
          <li>Clouds: {{ item.clouds }}</li>
          <li>Visibility: {{ item.visibility }}</li>
          <li>Wind Speed: {{ item.wind_speed }}</li>
          <li>
            Wind Direction: {{ item.wind_deg }} (TODO - convert to direction)
          </li>
          <li>Wind Gust: {{ item.wind_gust }}</li>
          <li>
            Weather:
            {{ item.weather[0].main }}
          </li>
          <li>
            Weather icon:
            <img
              :src="
                'http://openweathermap.org/img/wn/' +
                item.weather[0].icon +
                '@2x.png'
              "
            />
            <br />Weather icons can be found here:
            <a href="https://openweathermap.org/weather-conditions"
              >https://openweathermap.org/weather-conditions</a
            >
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "DayForecast",
  props: {
    data: Object,
    timezone: String,
  },
};
</script>