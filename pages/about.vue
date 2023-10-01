<template>
  <div>
    <div>Page: about</div>
    <div v-if="!openMeteoPending && openMeteoData">
      useWeather: {{ openMeteoData }}

      icon:
      <lazy-atoms-weather-icon
        v-if="openMeteoData.current_weather.weathercode"
        :code="openMeteoData.current_weather.weathercode"
        :is-day="openMeteoData.current_weather.is_day"
      />
    </div>
  </div>
</template>
<script lang="ts" setup>
const { data: openMeteoData, pending: openMeteoPending } = await useOpenMeteo();
</script>
