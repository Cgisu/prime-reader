<!---------------------------------- template --------------------------------->
<template>
  <header
    class="page-header q-header q-layout__section--marginal fixed-top q-header--bordered absolute-top bg-marginal-bg "
  >
    <div class="q-toolbar row no-wrap items-center text-marginal-text">
      <slot name="buttons-left"/>
      <div
        class="page-header-title q-toolbar__title ellipsis text-center text-size-16 text-bold"
      >
        <slot name="title" />
      </div>
      <div class="absolute-right q-py-xs q-px-sm">
        <slot name="buttons-right"></slot>
      </div>
    </div>
  </header>
</template>
