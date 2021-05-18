import React from 'react'

import { store } from '../store'
import { createLogoutAction } from '../store/actions'

import NavBarComponent from '../components/NavBar'
import ProfileComponent from '../components/Profile'
import LoginComponent from '../components/Login'

const NavBarContainer = (
) => {
  const [user, setUser] = React.useState(null)

  const handleLogout = React.useCallback(() => {
    store.dispatch(createLogoutAction())
  }, [store])

  React.useEffect(() => {
    setUser(store.getState().user)
  }, [store.getState().user, setUser])

  return (
    <NavBarComponent>
      {user !== null
        ? <ProfileComponent user={user} logoutHandler={handleLogout} />
        : <LoginComponent />}
    </NavBarComponent>
  )
}

export default NavBarContainer
