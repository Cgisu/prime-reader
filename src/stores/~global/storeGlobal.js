import { defineStore } from 'pinia'

/**
 * UseGlobalStore
 */

  export const useGlobalStore = defineStore('storeGlobal', {
    state: () => ({
      // Navigation tab links
      navLinks: [
        {
          root: '/library',
          title: 'Library',
          icon: 'collections_bookmark',
          link: '/library'
        },
        {
          root: '/files',
          title: 'Explore Files',
          icon: 'upload',
          link: '/files'
        },
        {
          root: '/settings',
          title: 'Settings',
          icon: 'settings',
          link: '/settings'
        }
      ],
      usePageTransition: false
    })
  })
