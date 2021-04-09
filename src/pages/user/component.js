import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Loader from 'react-loader-spinner';
import { Link } from 'react-router-dom';

import Image from 'components/image';
import { getUserOrgsReq, getUserReposReq } from 'app/actions';

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import './user.css';

const User = () => {
  const [ user, setUser ] = useState(null);
  const [ userOrgs, setUserOrgs ] = useState([]);
  const [ userRepos, setUserRepos ] = useState([]);

  const { userItem } = useSelector(state => state.user);
  const { orgItems } = useSelector(state => state.orgs);
  const { repoItems } = useSelector(state => state.repos);

  const dispatch = useDispatch();

  useEffect(_ => {
    if (userItem !== null) {
      setUser(userItem);
      return;
    }
    setUser(null);
  }, [userItem]);

  useEffect(_ => {
    if (user !== null) {
      dispatch(getUserOrgsReq(userItem.login));
      dispatch(getUserReposReq(userItem.login));
    }
  }, [user]);

  useEffect(_ => {
    if (repoItems !== null) {
      setUserRepos(repoItems);
      return;
    }
    setUserRepos([]);
  }, [repoItems]);

  useEffect(_ => {
    if (orgItems !== null) {
      setUserOrgs(orgItems);
      return;
    }
    setUserOrgs([]);
  }, [orgItems]);

  return user ? <div className='user-inner'>
    <div className='user-inner-page'>
      <div className='user-inner-page-info-place'>
        <div className='user-inner-page-img-place'>
          <Image src={user.avatar_url} alt='avatar' />
        </div>
      </div>
      <div className='user-inner-page-info-place'>
        <p className='user-inner-info-text'>User name: {user.name ? user.name : '----'}</p>
        <p className='user-inner-info-text'>Address: {user.location ? user.location : '----'}</p>
        <p className='user-inner-info-text'>Followers: {user.followers ? user.followers : '----'}</p>
        <p className='user-inner-info-text'>Following: {user.following ? user.following : '----'}</p>
      </div>
    </div>
    <div className='user-inner-page'>
      <div className='user-info-list'>
        <p>Repositories</p>
        <ul className='list'>
          {(userRepos && userRepos.length > 0) ? userRepos.map((item, index) => {
              return <li key={`repos_${index}`}>
                <Link to={{ pathname: item.html_url }} target='_blank'>
                  {item.name}
                </Link>
              </li>
            }) : <Loader
              width={45}
              height={45}
              timeout={-1}
              color='#00BFFF'
              type='BallTriangle'
              style={{position: 'absolute', left: '50%', top: '50%'}}
            />
          }
        </ul>
      </div>
      <div className='user-info-list'>
        <p>Organizations</p>
        <ul className='list'>
          {
            (userOrgs && userOrgs.length > 0) ? userOrgs.map((item, index) => {
              return <li key={`orgs_${index}`}>
                <Link to={item.html_url} target='_blank'>
                  {item.name}
                </Link>
              </li>
            }) : <Loader
              width={45}
              height={45}
              timeout={-1}
              color='#00BFFF'
              type='BallTriangle'
              style={{position: 'absolute', left: '50%', top: '50%'}}
            />
          }
        </ul>
      </div>
    </div>
  </div> : 'No Info...'
}

export default User;
