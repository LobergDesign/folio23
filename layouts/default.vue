<template>
  <div>
    <layout-topbar />
    <layout-header />
    <slot />
    <pre>
      appConfig: {{ appConfig }}
    </pre>
    <intermediateExample />
  </div>
</template>
<script setup>
const appConfig = useAppConfig();
// useBugsnag().notify("Some Error");
useHead({
  title: "LAYOUT",
  meta: [{ name: "description", content: "My amazing site." }],
  bodyAttrs: {
    class: "test",
  },
  // script: [{ innerHTML: "console.log('Hello world')" }],
});
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
