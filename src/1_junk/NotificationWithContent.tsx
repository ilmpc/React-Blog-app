import React from 'react'

import Notification from './Notification'

const NotificationWithContent = ({
  render
}) => (
  <Notification>
    {render(new Date())}
  </Notification>
)

export default NotificationWithContent
