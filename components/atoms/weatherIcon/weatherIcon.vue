<template>
  <nuxt-icon class="weather-icon" :name="`weather/${setIcon}_icon`" filled />
</template>
<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    code: number;
    isDay: number;
  }>(),
  {
    isDay: 1, // 1 is day, 0 is night
  },
);
console.log("props.code", props.code);
const setIcon = computed(() => {
  // https://open-meteo.com/en/docs#hourly=temperature_2m,weathercode
  // icons: https://github.com/basmilius/weather-icons/blob/dev/design/fill/final/drizzle.svg

  const dayCheck = props.isDay === 1;

  switch (props.code) {
    case 0:
      return dayCheck ? "clear-day" : "clear-night";
    case 1:
    case 2:
      return dayCheck ? "cloudy" : "partly-cloudy-night";
    case 3:
      return dayCheck ? "overcast" : "overcast-night";
    case 45:
    case 48:
      return dayCheck ? "fog" : "fog-night";
    case 51:
    case 53:
    case 55:
    case 56:
    case 57:
      return dayCheck ? "drizzle" : "overcast-night-drizzle";
    case 61:
    case 63:
    case 65:
    case 66:
    case 67:
      return dayCheck ? "rain" : "overcast-night-rain";
    case 71:
    case 73:
    case 75:
    case 77:
      return dayCheck ? "snow" : "overcast-night-snow";
    case 80:
    case 81:
    case 82:
      return dayCheck ? "extreme-rain" : "extreme-night-rain";
    case 85:
    case 86:
      return dayCheck ? "extreme-snow" : "extreme-night-snow";
    case 95:
    case 96:
    case 99:
      return dayCheck
        ? "thunderstorms-day-extreme-rain"
        : "thunderstorms-night-overcast-rain";
    default:
      return "cloudy";
  }
});
</script>
<style src="./weatherIcon.scss" />
