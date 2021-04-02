import React from 'react'

import ArticleComponent from '../components/Article'
import LoaderComponent from '../components/Loader'

import services from '../services'

const ArticleContainer = ({
  id
}) => {
  const [article, setArticle] = React.useState()

  React.useEffect(() => {
    setArticle(services.fetchArticle(id))
  }, [setArticle, services.fetchArticle, id])

  return (
    article
      ? <ArticleComponent {...article} />
      : <LoaderComponent />
  )
}

export default ArticleContainer
