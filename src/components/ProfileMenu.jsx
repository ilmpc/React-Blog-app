import React from 'react'
import PropTypes from 'prop-types'
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap'

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

export default ProfileMenuComponent
