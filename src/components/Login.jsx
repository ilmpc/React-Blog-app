import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'reactstrap'
import ROUTES from '../routes'

const LoginComponent = (
) => (
  <div>
    <Link to={ROUTES.login}>
      <Button>Login</Button>
    </Link>
    <Link to={ROUTES.register}>
      <Button>Sign up</Button>
    </Link>
  </div>
)

export default LoginComponent
