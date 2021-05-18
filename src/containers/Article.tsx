import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

import ArticleComponent from '../components/Article'
import LoaderComponent from '../components/Loader'
import { articleSelectors } from '../ducks/article'
import services from '../ducks/article/services'

/*
  const [article, setArticle] = React.useState()
React.useEffect(() => {
    setArticle(services.fetchArticle(id))
  }, [setArticle, services.fetcArticle, id])
*/

const ArticleContainer = () => {
  const { id } = useParams()
  const article = useSelector(articleSelectors.createById(id))

  return (
    article
      ? <ArticleComponent {...article} />
      : <LoaderComponent />
  )
}

export default ArticleContainer
