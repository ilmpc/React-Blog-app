import React from 'react'
import { useParams } from 'react-router-dom'

import ArticleComponent from '../components/Article'
import LoaderComponent from '../components/Loader'

import services from '../services'

const ArticleContainer = (
) => {
  const [article, setArticle] = React.useState()
  const { id } = useParams()
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
