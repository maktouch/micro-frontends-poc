import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Logo from "@poc/common/Logo"
import LocaleSwitcher from "@poc/common/LocaleSwitcher"
import Test from "@poc/common/Test"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Logo />
    <LocaleSwitcher currentLocale="en" />
    <Test />
  </Layout>
)

export default IndexPage
