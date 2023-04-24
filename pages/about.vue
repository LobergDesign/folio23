<template>
  <div>
    <div>Page: about</div>
    <pre>
  useFetch:  {{ data }}
  </pre
    >
  </div>
</template>
<script lang="ts" setup>
const { data } = await useFetch("/api/hello");
</script>
<style scoped></style>
