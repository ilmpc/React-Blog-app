import React from 'react'

import LoginFormComponent from '../components/LoginForm'

import { store } from '../store'
import { createLoginAction } from '../store/actions'
import services from '../ducks/user/services'

const LoginFormContainer = (
) => {
  const [formData, setFormData] = React.useState({ username: '', password: '' })

  const handleSubmit = React.useCallback((event) => {
    event.preventDefault()
    const user = services.loginUser(formData.username, formData.password)
    store.dispatch(createLoginAction(user))
  }, [store, services.loginUser, formData])

  const handleChange = React.useCallback((event) => {
    const name = event.target.name
    const value = event.target.value
    setFormData((prev) => ({ ...prev, [name]: value }))
  }, [setFormData])

  return (
    <LoginFormComponent formData={formData} changeHandler={handleChange} submitHandler={handleSubmit} />
  )
}

export default LoginFormContainer
