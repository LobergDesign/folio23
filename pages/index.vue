<template>
  <div>Page: home</div>
  <pre>
    $cms: {{ result }}
  </pre>
</template>
<script lang="ts" setup>
const result = await GqlGetFrontpage();

console.log("result", result);
</script>
<style scoped></style>
