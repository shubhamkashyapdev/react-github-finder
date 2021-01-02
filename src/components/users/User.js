import React, { Component,Fragment } from 'react'
import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Repos from '../repos/Repos';


class User extends Component {
  componentDidMount() {
    this.props.getUser(this.props.match.params.login);
    this.props.getUserRepos(this.props.match.params.login);
  }
  static propTypes = {
    loading: PropTypes.bool,
    user: PropTypes.object.isRequired,
    getUser: PropTypes.func.isRequired,
    repos: PropTypes.array.isRequired,
  }
  render() {
    const {
      name,
      avatar_url,
      location,
      bio,
      blog,
      login,
      html_url,
      company,
      followers,
      following,
      public_repos,
      public_gists,
      hireable
    } = this.props.user;

    const { loading,repos } = this.props;
    // if(loading) {
    //   return <Spinner/>
    // }
    return (
      <Fragment>
        <Link to="/" className="btn btn-light">
          Back to Search
        </Link>
         Hireable: {''}
         {hireable ? <i className="fa fa-check text-green"></i> : <i className="fas fa-times-circle"></i>}
         <div className="card grid-2">
           <div className="all-center">
             <img src={avatar_url} className="round-img" style={{width:'150px'}} alt=""/>
             <h1>{name}</h1>
             <p>Location: {location}</p>
           </div>
           <div>
           {bio && <Fragment>
             <h3>Bio</h3>
             <p>{bio}</p>
             </Fragment>}
             <a href={html_url} className="btn btn-dark my-1">Visit github profile</a>
             <ul>
               <li>
                 {login && <Fragment>
                   <strong>Username :</strong>{login}
                   </Fragment>}
               </li>
               <li>
                 {company && <Fragment>
                   <strong>Company :</strong>{company}
                   </Fragment>}
               </li>
               <li>
                 {blog && <Fragment>
                   <strong>Website :</strong>{blog}
                   </Fragment>}
               </li>
               
             </ul>
           </div>
         </div>
         {/* badges */}
         <div className="card text-center">
           <div className="badge badge-primary">Followers: {followers}</div>
           <div className="badge badge-success">Following: {following}</div>
           <div className="badge badge-light">Public Repos: {public_repos}</div>
           <div className="badge badge-dark">Public Gists: {public_gists}</div>
         </div>
         <Repos repos={repos} />

      </Fragment>
    )
  }
}
export default User;
