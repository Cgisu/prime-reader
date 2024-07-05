import { useGlobalStore } from 'src/stores/~global/storeGlobal'
import { boot } from 'quasar/wrappers'

let routerInstance = null

export default boot(({ router }) => {
  routerInstance = router
  const storeGlobal = useGlobalStore()

  router.afterEach((to, from) => {
    const toRootPath = `/${to.path.split('/')[1]}`
    const fromRootPath = `/${from.path.split('/')[1]}`

    if (fromRootPath !== toRootPath) {
      storeGlobal.usePageTransition = false
    } else {
      storeGlobal.usePageTransition = true

      if (from.path === to.path && to.path !== toRootPath) {
        router.push(toRootPath)
      }
    }

    updateNavLink(toRootPath, to.path)
  })

  function updateNavLink(toRootPath, toPath) {
    const navLinkIndex = storeGlobal.navLinks.findIndex(navLink => navLink.root === toRootPath)
    if (navLinkIndex !== -1) {
      storeGlobal.navLinks[navLinkIndex].link = toPath
    }
  }
})

export { routerInstance }
