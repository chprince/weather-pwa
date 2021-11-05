<template>
  <div class="minute-forecast">
    Rain next hour
    <ul>
      <li v-for="item in data" :key="item.id">
        {{ $filters.timeMinute(item.dt) }}: {{ item.precipitation }}mm
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "MinuteForecast",
  props: {
    data: Object,
  },
};
</script>