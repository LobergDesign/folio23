<template>
  <div>{{ setIcon }}</div>
</template>
<script lang="ts" setup>
const props = defineProps<{
  code: number;
}>();

const setIcon = computed(() => {
  // https://open-meteo.com/en/docs#hourly=temperature_2m,weathercode
  // icons: https://github.com/basmilius/weather-icons/blob/dev/design/fill/final/drizzle.svg
  // day/night?
  switch (props.code) {
    case 0:
      return "clear-day";
    case 1:
    case 2:
      return "clouds";
    case 3:
      return "overcast";
    case 45:
    case 48:
      return "fog";
    case 51:
    case 53:
    case 55:
      return "drizzle";
    case 56:
    case 57:
      return "freezing-drizzle";
    case 61:
    case 63:
    case 65:
      return "rain";
    case 66:
    case 67:
      return "freezing-rain";
    case 71:
    case 73:
    case 75:
      return "snow-fall";
    case 77:
      return "snow-grains";
    case 80:
    case 81:
    case 82:
      return "rain-showers";
    case 85:
    case 86:
      return "snow-showers";
    case 95:
    case 96:
    case 99:
      return "thunderstorm";
    default:
      return "unknown";
  }
});
</script>
<style scoped src="./weatherIcon.scss" />
