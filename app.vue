<template>
  <div>
    <o-header />
    <h1>folio 2023</h1>
    <pre>
      {{ appConfig }}
    </pre>
    <a-btn />

    <NuxtPage />
  </div>
</template>
<script setup>
const appConfig = useAppConfig();
</script>
<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.2s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
