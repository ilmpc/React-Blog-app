import * as Types from './types'

export const createLoginAction = (
  user
) => ({
  type: Types.ACTION_LOGIN,
  user
})

export const createLogoutAction = (

) => ({
  type: Types.ACTION_LOGOUT
})

export const createRenameAction = (
  username
) => ({
  type: Types.ACTION_RENAME,
  username
})
