<template>
  <div
    class="page absolute-top fit bg-backdrop shadow-4"
    ref="pageRef"
  >
    <div
      v-touch-swipe.mouse.right="useGoBack"
      class="page-nudger fit"
      :class="{ 'nudge-left' : hasActiveChildPage }"
    >
      <slot />
    </div>
    <router-view v-slot="{ Component }">
      <transition
        :css="storeGlobal.usePageTransition"
        appear
        enter-active-class="animated slideInRight"
        leave-active-class="animated slideOutRight"
      >
        <keep-alive>
          <component
            @pageActivated="hasActiveChildPage = true"
            @pageDeactivated="hasActiveChildPage = false"
            :is="Component"
          />
        </keep-alive>
      </transition>
    </router-view>
  </div>
</template>
<script setup>
/**
 * Imports
 */

import { ref, onActivated, onDeactivated, onMounted, computed } from "vue";
import { useQuasar } from "quasar";
import { useGlobalStore } from "src/stores/~global/storeGlobal";
import useGoBack from "src/use/useGoBack";

/**
 * Global Store
 */

  const storeGlobal = useGlobalStore();
  console.log(storeGlobal.usePageTransition)

/**
 * Emits
 */

  const emits = defineEmits(["pageActivated", "pageDeactivated"]);

/**
 * Nudge left
 */

  let hasActiveChildPage = ref(false);

  onActivated(() => {
    emits("pageActivated");
  });

  onDeactivated(() => {
    emits("pageDeactivated");
  });

  /**
  * Page swipe back handler
  */

  // let backBtn = null
  // onMounted(() => {
  //   backBtn = pageRef.value.querySelector('.page-header-btn-back')
  // })

  // const swipePageRight = (e) => {
  //   if (backBtn && e.touch && e.evt.touches[0].pageX < 50) {
  //     backBtn.click()
  //   }
  // }

/**
 * Page header and footer spacer
 */

  const pageRef = ref(null);
  onMounted(() => {
    let pageHeader = pageRef.value.querySelector(".page-header"),
      pageHeaderSpacer = pageRef.value.querySelector(".page-body-spacer-header"),
      pageFooter = pageRef.value.querySelector(".page-footer"),
      pageFooterSpacer = pageRef.value.querySelector(".page-body-spacer-footer"),
      qFooter = document.querySelector(".q-footer");

    // console.log(pageFooter !== null ? pageFooter.offsetHeight: 0)

  // this code will be fired every time the page-header height changes
  const headerResizeObserver = new ResizeObserver(() => {
    pageHeaderSpacer.style.height = `${pageHeader.offsetHeight}px`;
  });

  // this code will be fired every time the pane-footer height changes
  const footerResizeObserver = new ResizeObserver(() => {
    pageFooterSpacer.style.height = `${pageFooter !== null ? pageFooter.offsetHeight : qFooter.offsetHeight }px`;
    console.log(pageFooterSpacer.style.height)

  });

  if (pageHeader) headerResizeObserver.observe(pageHeader);
  if (pageFooter) footerResizeObserver.observe(pageFooter);
  if (qFooter) footerResizeObserver.observe(qFooter);
});

/**
 * Quasar
 */

 const $q = useQuasar();

/**
 * Handle ios
 */

// handle swipe right
  const handleSwipeRight = () => {
    if (isIosBrowser.value) {
      storeGlobal.iosBrowserSwipingBack = true;
    } else {
      useGoBack();
    }
  };

// detect ios device using browser (not cordova or capacitor)


  const isIosBrowser = computed(() => {
    if ($q.platform.is.ios && !$q.platform.is.cordova && !$q.platform.is.capacitor) {
      return true;
    }
    return false;
  });
</script>

<style>
/* @keyframes slideOutRight {
  from {
    transform: translate3d(0, 0, 0);
  }
  to {
    visibility: hidden;
    transform: translate3d(100%, 0, 0);
  }
}
.slideOutRight {
  animation-name: slideOutRight;
}

@keyframes slideInRight {
  from {
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }
  to {
    transform: translate3d(0, 0, 0);
  }
}
.slideInRight {
  animation-name: slideInRight;
}

.slide-enter-active {
  animation: slideInRight 0.3s;
}
.slide-leave-active {
  animation: slideInRight 0.3s reverse;
} */
</style>
