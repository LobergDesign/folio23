<template>
  <div>
    <div>
      <button @click="execute()">Get data</button>
    </div>
    <h2>{{ openMeteoStatus }}</h2>

    <div v-if="openMeteoPending && openMeteoStatus !== 'idle'">
      Loading comments...
    </div>

    <div v-else-if="openMeteoStatus === 'success'">
      {{ openMeteoData }}
    </div>

    <div v-if="!openMeteoPending && openMeteoData">
      <!-- useWeather: {{ openMeteoData }} -->

      icon:
      <atoms-weather-icon
        v-if="openMeteoData.current_weather.weathercode"
        :code="openMeteoData.current_weather.weathercode"
        :is-day="openMeteoData.current_weather.is_day"
      />
    </div>
    <client-only>
      <atoms-city-info />
    </client-only>
  </div>
</template>

<script setup lang="ts">
const {
  data: openMeteoData,
  pending: openMeteoPending,
  status: openMeteoStatus,
  execute,
} = await useOpenMeteo();
</script>

<style src="./topbar.scss" scoped />
