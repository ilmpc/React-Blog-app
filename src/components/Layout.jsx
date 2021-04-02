import React from 'react'
import { Route } from 'react-router-dom'

import NavBarContainer from '../containers/NavBar'

const LayoutComponent = ({
  component: Component,
  ...rest
}) => {
  const wrapped = () => (
    <>
      <header className='App-header'>
        <NavBarContainer />
      </header>
      <hr />
      <main>
        {Component && <Component />}
      </main>
    </>
  )
  return (
    <Route render={wrapped} {...rest} />
  )
}

export default LayoutComponent
