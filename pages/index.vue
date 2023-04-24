<template>
  <div v-if="data">
    <div>Page: home</div>
    <pre>
    $cms: {{ data.result }}
  </pre
    >
    <pre>
    $nitro: {{ data }}
  </pre
    >
  </div>
</template>
<script lang="ts" setup>
const { data } = await useFetch("/api/hello");

// console.log("data", data.api);
// console.log("data result", data.result);
</script>
