import React from 'react'
import { Button } from 'reactstrap'

const Counter = (
) => {
  const [counter, setCounter] = React.useState(0)

  const increment = React.useCallback(() => setCounter((prevState) => prevState + 1), [setCounter])
  const decrement = React.useCallback(() => setCounter((prevState) => prevState - 1), [setCounter])

  return (
    <div>
      <Button onClick={increment}>+</Button>
      <span>{counter}</span>
      <Button onClick={decrement}>-</Button>
    </div>
  )
}

export default Counter
