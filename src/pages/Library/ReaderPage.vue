<template>
  <page>
    <page-header>
      <template #title>Reader</template>
      <template #buttons-left><page-header-btn back /></template>
    </page-header>
    <page-body>
      <div class="viewer-container">
        <div id="viewer" class="viewer" ref="viewer"></div>
      </div>
    </page-body>
  </page>
</template>

<script setup>
/**
 * Imports
 */

</script>

<style scoped>
.viewer-container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  position: relative;
  height: 80vh;
  margin-top: .5rem;
}

.viewer {
  height: 100%;
  border: 1px solid #ccc;
  width: 100%;
  max-width: 90vw;
  user-select: text;
}
</style>
