import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/Seo"
/*
const NotFoundPage = () => (
  <Layout>
    <h1>404: Not Found</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
)

export const Head = () => <Seo title="404: Not Found" />
*/
export default function NotFound() {
  return (
    <Layout>
     <div>
       <h2>404</h2>
       <p>Sorry,that page doesen't exist</p>
     </div>
    </Layout>
  )
}

