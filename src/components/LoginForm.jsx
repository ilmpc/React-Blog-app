import React from 'react'
import { Button } from 'reactstrap'

const LoginFormComponent = ({
  formDataHandler
}) => {
  const [formData, setFormData] = React.useState({ username: '', password: '' })

  const handleSubmit = React.useCallback((event) => {
    event.preventDefault()
    formDataHandler(formData)
  }, [formDataHandler, formData])

  const handleChange = React.useCallback((event) => {
    const name = event.target.name
    const value = event.target.value
    setFormData((prev) => ({ ...prev, [name]: value }))
  }, [setFormData])

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='username'>Username:</label>
      <input type='text' name='username' autoComplete='username' value={formData.username} onChange={handleChange} />
      <label htmlFor='password'>Password:</label>
      <input type='password' name='password' autoComplete='current-password' value={formData.password} onChange={handleChange} />
      <Button type='submit'>Login</Button>
    </form>
  )
}

export default LoginFormComponent
