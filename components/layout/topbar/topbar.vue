<template>
  <aside>
    <h1 v-if="openMeteoPending">Loading comments...</h1>

    <div v-else>
      {{ openMeteoData }}
    </div>

    <div v-if="!openMeteoPending && openMeteoData">
      <!-- useWeather: {{ openMeteoData }} -->
      icon:
      <atoms-weather-icon
        v-if="
          openMeteoData.current_weather.weathercode !== null ||
          openMeteoData.current_weather.weathercode !== undefined
        "
        :code="openMeteoData.current_weather.weathercode"
        :is-day="openMeteoData.current_weather.is_day"
      />
    </div>
    <client-only>
      <atoms-city-info />
    </client-only>
  </aside>
</template>

<script setup lang="ts">
const { data: openMeteoData, pending: openMeteoPending } = await useOpenMeteo();
</script>

<style src="./topbar.scss" scoped />
