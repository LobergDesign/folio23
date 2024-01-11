<template>
  <aside class="topbar">
    <div class="grid full-height">
      <div class="row no-padding-b full-height">
        <div class="col-6 place-c-l">
          <nuxt-link to="/" class="text-subtle">folio © 2024</nuxt-link>
        </div>
        <div class="col-6 place-c-r">
          <div>
            <client-only>
              <atoms-city-info />
            </client-only>
            <atoms-weather-icon />
          </div>
        </div>
      </div>
    </div>
  </aside>
</template>

<style src="./topbar.scss" scoped />
