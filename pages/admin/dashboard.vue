<template>
  <div v-if="result">
    <div>Page: Dashboard</div>
    <pre>
  useFetch:  {{ result }}
  </pre
    >
  </div>
</template>
<script lang="ts" setup>
const result = await GqlGetFrontpage();
</script>
<style scoped></style>
