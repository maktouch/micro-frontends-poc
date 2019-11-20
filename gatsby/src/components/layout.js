/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import { I18nProvider } from "@lingui/react"

import { Trans } from "@lingui/macro"

import "./layout.css"

const Layout = ({ children }) => {
  return (
    <I18nProvider language="en">
      <div>{children}</div>
      <div>
        <Trans>This is only in Gatsby</Trans>
      </div>
    </I18nProvider>
  )
  return
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
