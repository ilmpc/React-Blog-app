import { ACTION_LOGIN, ACTION_LOGOUT, ACTION_RENAME } from './types'

export const reducer = (
  state = { user: null },
  action
) => {
  switch (action.type) {
    case ACTION_LOGIN:
      return { ...state, user: action.user }
    case ACTION_LOGOUT:
      return { ...state, user: null }
    case ACTION_RENAME:
      return {
        ...state,
        user: { ...state.user, username: action.username }
      }
    default:
      return state
  }
}
