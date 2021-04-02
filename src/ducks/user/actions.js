import { ACTION_LOGIN, ACTION_LOGOUT, ACTION_RENAME } from './types'

export const createLoginAction = (
  user
) => ({
  type: ACTION_LOGIN,
  user
})

export const createLogoutAction = (
) => ({
  type: ACTION_LOGOUT
})

export const createRenameAction = (
  username
) => ({
  type: ACTION_RENAME,
  username
})
