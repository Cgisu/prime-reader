/**
 * Import Global vue components
 */

import Page from 'src/components/~Global/Page/Page.vue'
import PageHeader from 'src/components/~Global/Page/PageHeader.vue'
import PageBody from 'src/components/~Global/Page/PageBody.vue'
import PageFooter from 'src/components/~Global/Page/PageFooter.vue'
import PageEmpty from 'src/components/~Global/Page/PageEmpty.vue'
import PageHeaderBtn from 'src/components/~Global/Page/PageHeaderBtn.vue'

/**
* Global components
*/

const globalComponents = {
  // Page components
  'page': Page,
  'page-header': PageHeader,
  'page-body': PageBody,
  'page-footer': PageFooter,
  'page-header-btn': PageHeaderBtn,

  // Empty view component
  'page-empty': PageEmpty
}

/**
* Export global components
*/

export default async ({ app }) => {
  Object.entries(globalComponents).forEach(([name, component]) => {
    app.component(name, component)
  })
}
