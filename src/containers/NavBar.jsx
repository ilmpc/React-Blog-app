import React from 'react'
import { Link } from 'react-router-dom'

import ROUTES from '../routes'
import store from '../store'
import { createLoginAction, createLogoutAction } from '../store/actions'
import services from './services'

import NavBarComponent from '../components/NavBar'
import ProfileMenuComponent from '../components/ProfileMenu'

const ProfileComponent = ({
  user,
  logoutHandler
}) => (
  <div>
    <ProfileMenuComponent user={user} />
    <Button onClick={logoutHandler}>Logout</Button>
  </div>
)

const LoginComponent = (
) => (
<div>
  <Link to={ROUTES.login}>
    <Button>Login</Button>
  </Link>
  <Link to={ROUTES.register}>
    <Button>Sign up</Button>
  </Link>
</div>
)

const NavBarContainer = (
) => {
  const [user, setUser] = React.useState(null)

  const handleLogout = React.useCallback(() => (null), [setUser])

  return (
    <NavBarComponent>
      {user!== null
        ? <ProfileComponent user={user} logoutHandler={handleLogout} />
        : <LoginComponent />
      }
    </NavBarComponent>
  )
}


export default NavBarContainer