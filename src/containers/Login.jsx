import React from 'react'

import LoginFormComponent from '../components/LoginForm'

import services from '../services'

const LoginFormContainer = ({
}) => {
  React.useCallback(() => {
    setArticles(services.fetchArticle(id))
  }, [setArticle, services.fetchArticle, id])

  return (
    <LoginFormComponent />
  )
}

export default ArticleContainer
