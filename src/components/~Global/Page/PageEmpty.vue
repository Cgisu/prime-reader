<!---------------------------------- template --------------------------------->
<template>
  <div class="empty-page absolute-center text-center">
    <q-icon :name="`${icon}`" size="100px" color="blue-grey-3"/>
    <div v-if="label" style="font-size: 25px;" class="text-blue-grey-2 text-bold q-mb-lg">
      No {{ label }} Yet!
    </div>
    <div v-else style="font-size: 25px;" class="text-blue-grey-2 text-bold q-mb-lg">
      {{ custom }}
    </div>
  </div>
</template>

<!---------------------------------- script ----------------------------------->
<script setup>
/**
 * Props
 */

  const props = defineProps(['label', 'icon', 'custom'])
</script>
