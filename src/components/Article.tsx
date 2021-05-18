import React from 'react'

import Article from '../types/Article'

const ArticleComponent = ({
  title,
  imageUrl,
  content,
  user,
  createdAt
}) => (
  <article>
    <h2>{title}</h2>
    <img src={imageUrl} alt='post' />
    <div>{content}</div>
    <span>{user?.username}</span>
    <span>{createdAt}</span>
  </article>
)

ArticleComponent.propTypes = Article

export default ArticleComponent
