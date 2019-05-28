import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"

export default () => (
    <div style={{ color: 'purple' }}>
    <Link to="/contact/">Contact</Link>
    <h1>Hello Gatsby!</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    <img src="https://images.unsplash.com/photo-1558993468-4f71e02a64b0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=701&q=80"/>
    </div>
)