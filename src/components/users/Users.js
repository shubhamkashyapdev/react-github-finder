import React from 'react'
//import PropTypes from 'prop-types';
//import Spinner from '../layout/Spinner';
// user //
import UserItem from './UserItem';

const Users = ({users}) =>{
  
  
    return (
      <div style={userStyle}>
        {users.map(user => {
          return <UserItem key={user.id} user={user}/>
        })}
      </div>
    )
  
}

// prop types //



// user styles //
const userStyle = {
  display:'grid',
  gridTemplateColumns:'repeat(3,1fr)',
  gridGap:'1rem'
}

export default Users;