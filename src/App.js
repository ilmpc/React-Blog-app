import React from 'react'

import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import NavBar from './components/NavBar'
// import Article from './components/Article'
import LoginForm from './components/LoginForm'

import FeedContainer from './containers/Feed'
import store from './store'

export default function App ({}) {
  return (
    <Router>
      <Switch>
        <LayoutComponent path='/login' component={LoginContainer} user={store.getState().user} />
        {/* <LayoutComponent path='/main' render={() => <MainContainer article={article} />} user={user} />
        <LayoutComponent path='/overview' render={() => user ? <ArticleOverview {...article} /> : <LoginContainer />} user={user} />
        <Redirect to={user ? '/main' : '/login'} /> */}
      </Switch>
    </Router>
  )
}

const fetchArticle = (id) => ({
  id: id,
  title: 'My brand new cat',
  content: 'Today we adopted a new cat.\n It\'s fluffy and soft.',
  user: { username: 'Mike' },
  createdAt: '03-20-2020',
  imageUrl: 'https://bit.ly/fcc-relaxing-cat'
})

function fetchArticles () {
  return Array(5).fill().map((el, ind) => fetchArticle(ind))
}

function LoginContainer () {
  return (<LoginForm loginHandler={loginHandler} />)
}

function loginHandler ({ username, password }) {
  console.log('Form parameters: ', username, password)
}

function LayoutComponent ({
  component: Component,
  render,
  user,
  ...rest
}) {
  const wrapped = () => (
    <>
      <header className='App-header'>
        <NavBar user={user} blogName='Cats blog' />
      </header>
      <hr />
      <main>
        {Component && <Component />}
        {render && render()}
      </main>
    </>
  )
  return (
    <Route render={wrapped} {...rest} />
  )
}
