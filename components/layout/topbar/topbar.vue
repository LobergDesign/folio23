<template>
  <aside class="topbar">
    <div class="grid">
      <div class="row">
        <div class="col-6">jean loberg®</div>
        <div class="col-6"></div>
      </div>
    </div>
    <h1 v-if="!pending"></h1>
    {{ pending }}

    <div v-if="!pending && openMeteoData">
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
const { data: openMeteoData, pending } = await useOpenMeteo();
</script>

<style src="./topbar.scss" scoped />
