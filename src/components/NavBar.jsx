import React from 'react'
import PropTypes from 'prop-types'
import {
  Navbar,
  NavbarBrand,
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button
} from 'reactstrap'

import { Link } from 'react-router-dom'

import ROUTES from '../routes'
import store from '../store'
import { createLoginAction, createLogoutAction } from '../store/actions'

const ProfileMenuComponent = ({ user }) => (
  <UncontrolledDropdown nav inNavbar>
    <DropdownToggle nav caret>
      {user.username}
    </DropdownToggle>
    <DropdownMenu right>
      <DropdownItem>
        Profile
      </DropdownItem>
      <DropdownItem divider />
      <DropdownItem>
        Logout
      </DropdownItem>
    </DropdownMenu>
  </UncontrolledDropdown>
)

ProfileMenuComponent.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string
  }).isRequired
}

const NavBarComponent = ({
  blogName,
  user
}) => (
  <Navbar light>
    <NavbarBrand href='/'>{blogName}</NavbarBrand>
    {user !== null
      ? <div>
        <ProfileMenuComponent user={user} />
        <Button onClick={() => store.dispatch(createLogoutAction())}>Logout</Button>
        </div>
      : <div>
        <Link to={ROUTES.login}>
          <Button onClick={() => store.dispatch(createLoginAction({ username: 'name' }))}>Login</Button>
        </Link>
        <Link to={ROUTES.register}>
          <Button>Sign up</Button>
        </Link>
        </div>}
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
