<template>
  <div>Page: home</div>
  <pre>
    $cms: {{ result }}
  </pre>
</template>
<script lang="ts" setup>
const result = await GqlGetFrontpage();
</script>
<style scoped></style>
