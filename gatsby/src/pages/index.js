import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Logo from "@poc/common/Logo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Logo />
  </Layout>
)

export default IndexPage
