import React from 'react'
import {Link} from 'react-router-dom'
export default function NotFound() {
  return (
    <div>
      page not found,do you want go to
        <Link to='/'> home</Link>
    </div>
  )
}
