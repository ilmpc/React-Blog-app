import React from 'react'

import FeedComponent from '../components/Feed'
import LoaderComponent from '../components/Loader'

import services from '../services'

const FeedContainer = (
) => {
  const [articles, setArticles] = React.useState()

  React.useEffect(() => {
    setArticles(services.fetchArticles())
  }, [setArticles, services.fetchArticles])

  return (
    articles
      ? <FeedComponent articles={articles} />
      : <LoaderComponent />
  )
}

export default FeedContainer
