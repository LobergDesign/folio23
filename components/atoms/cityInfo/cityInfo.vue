<template>
  <div>
    <span>Copenhagen, Denmark</span>. <span>{{ time }}</span>
  </div>
</template>
<script lang="ts" setup>
const time = ref<string>();
const setTime = () => {
  // create a new Date object for the current time
  const now = new Date();
  // set the timezone to Copenhagen's timezone
  const options: Intl.DateTimeFormatOptions = {
    timeZone: "Europe/Copenhagen",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  };

  // format the time in the desired format
  const timeInCopenhagen = new Intl.DateTimeFormat("en-DK", options).format(
    now,
  );

  time.value = timeInCopenhagen;
};
onMounted(() => {
  setTime();
  // update every 60 minutes
  setInterval(() => {
    setTime();
  }, 60000);
});
</script>
<style src="./cityInfo.scss" scoped />
