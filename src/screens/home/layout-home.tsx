/**
 * Home Screen Template
 *
 * @screen
 */


import Layout from '../../layouts/main'

import type { LayoutProps } from '../../layouts/types'

const HomeScreenTemplate = ({ children, loading = true }: LayoutProps): JSX.Element => (
  <Layout loading={loading}>
    {children}
  </Layout>
)

export default HomeScreenTemplate