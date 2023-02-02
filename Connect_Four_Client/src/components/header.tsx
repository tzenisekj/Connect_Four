import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className="flex justify-center bg-gray-200 w-full">
        <Link to="/">CONNECT FOUR</Link>
    </header>
  )
}

export default Header