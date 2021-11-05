<template>
  <div class="minute-forecast" v-if="data">
    Rain next hour
    <ul>
      <li v-for="item in data" :key="item.id">
        {{ $filters.timeMinute(item.dt, timezone) }}: {{ item.precipitation }}mm
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "MinuteForecast",
  props: {
    data: Object,
    timezone: String,
  },
};
</script>