import React from "react"
import SEO from "../components/seo"
import Layout from '../layout/layout/layout'

const NotFoundPage = () => (
  <Layout>
    <div className="404page">
      <SEO title="404: Not found" />
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </div>
  </Layout>
  
)

export default NotFoundPage