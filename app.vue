<template>
  <div>
    <h1>folio 2023</h1>
    <pre>
      {{ appConfig }}
    </pre>
    <o-myorganmsi />
  </div>
</template>
<script setup>
const appConfig = useAppConfig();
console.log("appConfig", appConfig);
</script>
