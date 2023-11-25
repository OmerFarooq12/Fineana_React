import React from 'react'
import NavItem from './NavItem'
import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <header className="header_section">
    <div className="container">
      <nav className="navbar navbar-expand-lg custom_nav-container ">
        <Link className="navbar-brand" to="/">
          <span>
            Feane
          </span>
        </Link>

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className=""> </span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav  mx-auto ">
            <NavItem Route="/" Name="Home"/>
            <NavItem Route="/about" Name="About"/>
            <NavItem Route="/menu" Name="Menu"/>
            <NavItem Route="/book-table" Name="BOOK TABLE"/>
          </ul>
          <div className="user_option">
            <Link to="/" className="user_link">
              <i className="fa fa-user" aria-hidden="true"></i>
            </Link>
            <Link className="cart_link" to="/">
          
            </Link>
            <form className="form-inline">
              <button className="btn  my-2 my-sm-0 nav_search-btn" type="submit">
                <i className="fa fa-search" aria-hidden="true"></i>
              </button>
            </form>
            <Link to="/" className="order_online">
              Order Online
            </Link>
          </div>
        </div>
      </nav>
    </div>
  </header>
  )
}
