import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Logo from "@poc/common/Logo"
import LocaleSwitcher from "@poc/common/LocaleSwitcher"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Logo />
    <LocaleSwitcher currentLocale="en" />
  </Layout>
)

export default IndexPage
