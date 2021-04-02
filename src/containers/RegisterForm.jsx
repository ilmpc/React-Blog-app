import React from 'react'

import RegisterFormComponent from '../components/RegisterForm'

import services from '../services'

const RegisterFormContainer = (
) => {
  const [formData, setFormData] = React.useState({ username: '', password: '' })

  const handleSubmit = React.useCallback((event) => {
    event.preventDefault()
    services.registerUser(formData.username, formData.password)
  }, [services.registerUser, formData])

  const handleChange = React.useCallback((event) => {
    const name = event.target.name
    const value = event.target.value
    setFormData((prev) => ({ ...prev, [name]: value }))
  }, [setFormData])

  return (
    <RegisterFormComponent formData={formData} changeHandler={handleChange} submitHandler={handleSubmit} />
  )
}

export default RegisterFormContainer
