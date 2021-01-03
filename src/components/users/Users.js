import React,{ useContext} from 'react'
//import PropTypes from 'prop-types';
//import Spinner from '../layout/Spinner';
import GithubContext from '../../context/github/githubContext';
// user //
import UserItem from './UserItem';

const Users = () =>{
  const githubContext = useContext(GithubContext);
  const {loading,users} = githubContext;
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