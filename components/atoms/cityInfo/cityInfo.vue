<template>
  <div class="city-info">
    <span class="text-subtle">copenhagen</span>
    <atoms-dot />
    <span class="text-subtle"> {{ time }} </span>
    <div class="text-subtle city-info__zone">{{ zone }}</div>
    <atoms-dot />
  </div>
</template>
<script lang="ts" setup>
const time = ref<string>();
const now = new Date();
const setTime = () => {
  // set the timezone to Copenhagen's timezone
  const options: Intl.DateTimeFormatOptions = {
    timeZone: "Europe/Copenhagen",
    hour: "2-digit",
    minute: "2-digit",
  };

  // format the time in the desired format
  const timeInCopenhagen = new Intl.DateTimeFormat("en-DK", options).format(
    now,
  );

  time.value = timeInCopenhagen;
};
const zone = computed(() => {
  // Create a Date object for January 1 and July 1 of the current year in Copenhagen
  const january = new Date(now.getFullYear(), 0, 1);
  const july = new Date(now.getFullYear(), 6, 1);

  // Get the time zone offset in minutes for both dates
  const timeZoneOffsetInJanuary = january.getTimezoneOffset();
  const timeZoneOffsetInJuly = july.getTimezoneOffset();

  // Determine the standard offset (CET) by picking the maximum offset,
  // as the offset is smaller (more negative) during CEST
  const standardOffset = Math.max(
    timeZoneOffsetInJanuary,
    timeZoneOffsetInJuly,
  );

  // Compare the current offset with the standard offset
  if (now.getTimezoneOffset() === standardOffset) {
    return "(CET)";
  } else {
    return "(CEST)";
  }
});
onMounted(() => {
  setTime();
  // update every 60 minutes
  setInterval(() => {
    setTime();
  }, 60000);
});
</script>
<style src="./cityInfo.scss" scoped />
