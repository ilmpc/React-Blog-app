import React from 'react'

import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom'

import LayoutComponent from './components/Layout'
import LoginFormContainer from './containers/LoginForm'
import FeedContainer from './containers/Feed'
import ArticleContainer from './containers/Article'
import RegisterFormContainer from './containers/RegisterForm'

import { store } from './store'

export default function App () {
  return (
    <Router>
      <Switch>
        <LayoutComponent path='/login' component={LoginFormContainer} />
        <LayoutComponent path='/signup' component={RegisterFormContainer} />
        <LayoutComponent path='/article/:id' container={ArticleContainer} />
        <LayoutComponent path='/feed' container={FeedContainer} />
        <Redirect to={store.getState().user ? '/feed' : '/login'} />
      </Switch>
    </Router>
  )
}
