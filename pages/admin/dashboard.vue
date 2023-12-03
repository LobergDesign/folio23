<template>
  <main v-if="result">
    <div>Page: Dashboard</div>
    <pre>
  useFetch:  {{ result }}
  </pre
    >
  </main>
</template>
<script lang="ts" setup>
const result = await GqlGetFrontpage();
</script>
<style scoped></style>
