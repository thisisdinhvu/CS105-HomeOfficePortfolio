import React from 'react'
import { Link } from 'react-router'
import './NotFoundPage.scss'

const NotFoundPage = () => {
  return (
    <div className='not-found-page'>
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <Link to="/">Return to Home</Link>
    </div>
  )
}

export default NotFoundPage

