import React from 'react'
import { useSocketContext } from '../contexts/socketContext'

export default function Home() {
  const { socket } = useSocketContext();


  return (
    <div>
      <h1>Home</h1>
      <h3>{socket.id}</h3>
    </div>
  )
}
