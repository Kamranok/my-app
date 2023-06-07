import { useState } from 'react'

export const Message = () => {
  const [message, setMessage] = useState('Welcome Visitor')

  const handleMessage = () => {
    setMessage('Thank you for subscribing')
  }

  return (
    <div>
      <h1>{message}</h1>
      <button onClick={handleMessage}>Subscribe</button>
    </div>
  )
}
