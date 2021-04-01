import React from 'react'
import PropTypes from 'prop-types'
import {
  Card, CardImg, CardBody,
  CardTitle, CardSubtitle, CardGroup
} from 'reactstrap'

import Article from '../types/Article'

const CardComponent = ({ article }) => (
  <Card>
    <CardImg width='50%' src={article.imageUrl} />
    <CardBody>
      <CardTitle>{article.title}</CardTitle>
      <CardSubtitle>by {article.user.username} at {article.createdAt}</CardSubtitle>
    </CardBody>
  </Card>
)

CardComponent.propTypes = {
  article: PropTypes.shape(Article)
}

const FeedComponent = ({ articles }) => (
  <CardGroup>
    {
      articles.length !== 0
        ? articles.map((article) =>
          <CardComponent article={article} key={article.id} />
          )
        : 'Error!'
    }
  </CardGroup>
)

FeedComponent.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.shape(Article))
}

export default FeedComponent
