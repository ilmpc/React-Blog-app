import { ARTICLE_EDIT } from './types'

const reducer = (
  state = {
    byId: {
      1: {
        id: 1,
        title: 'My brand new cat',
        content: 'Today we adopted a new cat.\n It\'s fluffy and soft.',
        user: { username: 'Mike' },
        createdAt: '03-20-2020',
        imageUrl: 'https://bit.ly/fcc-relaxing-cat'
      }
    }
  },
  action
) => {
  switch (action.type) {
    case ARTICLE_EDIT:
      break
    default:
      return state
  }
}

export default reducer
