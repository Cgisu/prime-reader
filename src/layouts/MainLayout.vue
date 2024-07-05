<!---------------------------------- template --------------------------------->
<template>
  <q-layout>
    <q-footer bordered class="bg-primary">
      <q-tabs
        class="q-px-md window-width hide-scrollbar text-light"
        active-color="blue"
        no-caps
      >
        <q-route-tab
          v-for="navLink in storeGlobal.navLinks"
          :to="navLink.link"
          :label="navLink.title"
          :icon="navLink.icon"
          class="text-marginal-btn text-size-12"
          active-class="text-marginal-btn-active"
        />
      </q-tabs>
    </q-footer>
    <q-page-container>
      <RouterView v-slot="{ Component }">
        <KeepAlive>
          <Component :is="Component"/>
        </KeepAlive>
      </RouterView>
    </q-page-container>
  </q-layout>
</template>

<!---------------------------------- script ----------------------------------->
<script setup>
/**
 * Imports
 */
  import { useGlobalStore } from 'src/stores/~global/storeGlobal'

/**
 * Stores
 */

  const storeGlobal = useGlobalStore()
</script>
