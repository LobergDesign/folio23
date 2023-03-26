<template>
  <div>
    <o-header />
    <h1>folio 2023</h1>
    <pre>
      {{ appConfig }}
    </pre>
    <a-btn />
    <icon-arrow aria-hidden="true" />
    <nuxt-page />
  </div>
</template>
<script setup>
import IconArrow from "~/assets/icons/arrow.svg";
const appConfig = useAppConfig();
// useBugsnag().notify("Some Error");
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
