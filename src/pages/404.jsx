import * as React from "react"
// import Layout from "@lekoarts/gatsby-theme-minimal-blog/src/components/layout"
import { css } from '@emotion/react'

const bgcolor = "#f2ffd9";
const Layout = css`
  background-color: ${bgcolor};
`

const NotFound = () => (
  <div css={Layout}>
    <h1>404 - Page Not Found</h1>
    <p>Unfortunately we couldn't find what you were looking for :(</p>
  </div>
)

export default NotFound
