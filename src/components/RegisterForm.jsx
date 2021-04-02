import React from 'react'
import { Button } from 'reactstrap'

const RegisterFormComponent = ({
  formData,
  changeHandler,
  submitHandler
}) => (
  <form onSubmit={submitHandler}>
    <label htmlFor='username'>Username:</label>
    <input type='text' name='username' autoComplete='username' value={formData.username} onChange={changeHandler} />
    <label htmlFor='password'>Password:</label>
    <input type='password' name='password' autoComplete='current-password' value={formData.password} onChange={changeHandler} />
    <Button type='submit'>Register</Button>
  </form>
)

export default RegisterFormComponent
