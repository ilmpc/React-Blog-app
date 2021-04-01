import React from 'react'
import PropTypes from 'prop-types'
import styles from './Notification.module.css'

const NotificationComponent = ({
  children,
  buttons
}) => (
  <div className={styles.notification}>
    {children}
    <div>
      {buttons}
    </div>
  </div>
)

NotificationComponent.propTypes = {
  children: PropTypes.node,
  buttons: PropTypes.arrayOf(PropTypes.node)
}

export default NotificationComponent
