<!---------------------------------- template --------------------------------->
<template>
  <q-btn
    @click="back ? useGoBack() : null"
    :class="{'pane-header-btn-back': back }"
    class="text-marginal-text"
    :padding="back ? '7px 10px 7px 2px': '5px'"
    :round="icon ? true : false"
    :size="icon ? 'md': ''"
    no-caps
    dense
    flat
  >
    <q-icon v-if="props.icon" size="md" :name="props.icon"/>
    <q-icon v-if="back" name="keyboard_arrow_left"/>
    <template v-if="props.label">
      {{ props.label }}
    </template>
    <div v-else>Back</div>
  </q-btn>
</template>

<!---------------------------------- script ----------------------------------->
<script setup>
/**
 * Imports
 */

  import useGoBack from 'src/use/useGoBack'

/**
 * Props
 */

  const props = defineProps({
    label: String,
    back: Boolean,
    icon: String
  })
</script>
