import React from 'react'

const withButtons = (
  WrappedComponent
) => (props) => (
  <WrappedComponent
    buttons={
      [
        <button onClick={() => console.log('ok')} key='ok'>
          ok
        </button>,
        <button onClick={() => console.log('dismiss')} key='dismiss'>
          dismiss
        </button>
      ]
    }
    {...props}
  />
)

export default withButtons
