<!---------------------------------- template --------------------------------->
<template>
  <page>
    <page-header>
      <template #title>Library</template>
    </page-header>
    <page-body>
      <page-empty @click="$router.push('/library/123')"
      icon="collections_bookmark"
      label="Files"
      />
    </page-body>
  </page>
</template>

<!---------------------------------- script ----------------------------------->
<script setup>
</script>
