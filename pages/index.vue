<template>
  <div v-if="data">
    <div>Page: home</div>

    <pre>
  data: {{ data }}
  </pre
    >
    <div v-html="data.frontpage.heroSection.title.html"></div>
  </div>
</template>
<script lang="ts" setup>
const { data } = await useFrontpage();

// console.log("data", data.api);
// console.log("data result", data.result);
</script>
