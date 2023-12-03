<template>
  <main v-if="data">
    <div>Page: home</div>

    <pre>
  data: {{ data }}
  </pre
    >
    <div v-html="data.frontpage.heroSection.title.html"></div>
  </main>
</template>
<script lang="ts" setup>
const data = await useFrontpage();

console.log("data", data);
// console.log("data result", data.result);
</script>
