/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./Header"
import "./layout.css"
import Footer from "./Footer"



export default function Layout({children}){
  return (
    <div className="layout">
      <Header />
      <main className="content">
        {children}
      </main>
      <Footer />

     
    </div>
  )
}
