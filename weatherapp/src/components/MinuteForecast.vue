<template>
  <div class="minute-forecast">
    <ul>
      <li v-for="item in data" :key="item.id">
        {{ item }}
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