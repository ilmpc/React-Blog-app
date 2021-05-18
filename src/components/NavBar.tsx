import React from 'react'
import PropTypes from 'prop-types'
import {
  Navbar,
  NavbarBrand,
  Nav
} from 'reactstrap'

const NavBarComponent = ({
  children,
  blogName
}) => (
  <Navbar light>
    <NavbarBrand href='/'>{blogName}</NavbarBrand>
    {children}
    <Nav />
  </Navbar>
)

NavBarComponent.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string
  }),
  blogName: PropTypes.string
}

NavBarComponent.defaultProps = {
  user: null,
  blogName: 'Blog App'
}

export default NavBarComponent
