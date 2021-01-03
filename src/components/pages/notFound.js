import React from 'react'
import {Link} from 'react-router-dom';
const NotFound = () => {
  return (
    <div>
      <h1>Not Found</h1>
      <p className="lead">Looks like you have lost..</p>
      <h3>Go back to home</h3>
      <Link to='/' className="btn btn-dark">
        go back 
      </Link>
    </div>
  )
}

export default NotFound;
