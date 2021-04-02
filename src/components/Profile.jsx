import React from 'react'
import { Button } from 'reactstrap'
import ProfileMenuComponent from './ProfileMenu'

const ProfileComponent = ({
  user,
  logoutHandler
}) => (
  <div>
    <ProfileMenuComponent user={user} />
    <Button onClick={logoutHandler}>Logout</Button>
  </div>
)

export default ProfileComponent
