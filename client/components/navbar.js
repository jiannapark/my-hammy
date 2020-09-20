import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'

const Navbar = ({handleClick, isLoggedIn, toggleMenuBurger}) => (
  <div>
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link to="/home" className="navbar-item" onClick={toggleMenuBurger}>
          <div className="title">My Hammy</div>
        </Link>

        <a
          role="button"
          className="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbar-data"
          onClick={toggleMenuBurger}
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </a>
      </div>

      <div id="navbar-data" className="navbar-menu">
        {isLoggedIn ? (
          <div className="navbar-end">
            <Link
              to="/dashboard"
              className="navbar-item"
              onClick={toggleMenuBurger}
            >
              Dashboard
            </Link>
            <Link to="/food" className="navbar-item" onClick={toggleMenuBurger}>
              Food
            </Link>
            <Link
              to="/environment"
              className="navbar-item"
              onClick={toggleMenuBurger}
            >
              Environment
            </Link>
            <div className="navbar-item">
              <Link
                to="#"
                className="button is-light"
                onClick={() => {
                  handleClick()
                  toggleMenuBurger()
                }}
              >
                Logout
              </Link>
            </div>
          </div>
        ) : (
          <div className="navbar-end">
            <Link to="/food" className="navbar-item" onClick={toggleMenuBurger}>
              Food
            </Link>
            <Link
              to="/environment"
              className="navbar-item"
              onClick={toggleMenuBurger}
            >
              Environment
            </Link>
            <div className="navbar-item">
              <div className="buttons">
                <Link
                  to="/login"
                  className="button is-primary"
                  onClick={toggleMenuBurger}
                >
                  <strong>Login</strong>
                </Link>
                <Link
                  to="/signup"
                  className="button is-light"
                  onClick={toggleMenuBurger}
                >
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
    <hr style={{margin: 0}} />
  </div>
)

const mapState = state => {
  return {
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    },
    toggleMenuBurger(evt) {
      const burger = document.getElementsByClassName('navbar-burger')[0]
      const navbarMenu = document.getElementById('navbar-data')
      if (evt && evt.target === burger) {
        burger.classList.toggle('is-active')
        navbarMenu.classList.toggle('is-active')
      } else if (burger.classList.contains('is-active')) {
        burger.classList.remove('is-active')
        navbarMenu.classList.remove('is-active')
      }
    }
  }
}

export default connect(mapState, mapDispatch)(Navbar)

Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
