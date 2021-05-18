import PropTypes from 'prop-types'

const Article = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  user: PropTypes.shape({
    username: PropTypes.string
  }).isRequired,
  createdAt: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired
}

export default Article
