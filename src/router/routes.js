/**
 * Layout and Page imports
 */

// Layout
import MainLayout from 'src/layouts/MainLayout.vue'

// Pages
import LibraryPage from 'src/pages/Library/LibraryPage.vue'
import ExploreFilesPage from 'src/pages/ExploreFiles/ExploreFilesPage.vue'
import ReaderPage from 'src/pages/Library/ReaderPage.vue'
import SettingsPage from 'src/pages/Settings/SettingsPage.vue'

// Routes
const routes = [
  {
    path: '/',
    component: MainLayout,
    children: [
      { path: '', redirect: '/library' },
      {
        path: '/library',
        component: LibraryPage,
        children: [
          {
            path: '/library/:fileId',
            component: ReaderPage
          }
        ]
      },
      {
        path: '/files',
        component: ExploreFilesPage,
        children: []
      },

      {
        path: '/settings',
        component: SettingsPage,
        children: []
      }
    ]
  }
]

export default routes
