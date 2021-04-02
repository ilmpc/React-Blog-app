import React from 'react'

import LoginFormComponent from '../components/LoginForm'

import services from '../services'

const LoginFormContainer = (
) => {
  const [formData, setFormData] = React.useState({ username: '', password: '' })

  const handleSubmit = React.useCallback((event) => {
    event.preventDefault()
    services.loginUser(formData.username, formData.password)
  }, [services.loginUser, formData])

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
