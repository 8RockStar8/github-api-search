import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import Image from 'components/image';

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import './home.css';

const Home = () => {
  const [ user, setUser ] = useState(null);

  const { userItem } = useSelector(state => state.user);

  useEffect(_ => {
    if (userItem !== null) {
      setUser(userItem);
      return;
    }
    setUser(null);
  }, [userItem]);

  return user ? <div className='home-user-place'>
    <div className='home-user-avatar-place'>
      <Link to='/user'>
        <Image src={user.avatar_url} alt='avatar' />
      </Link>
    </div>
    <p className='home-user-info-text'>User name: {user.name ? user.name : '----'}</p>
    <p className='home-user-info-text'>Address: {user.location ? user.location : '----'}</p>
    <p className='home-user-info-text'>Followers: {user.followers ? user.followers : '----'}</p>
    <p className='home-user-info-text'>Following: {user.following ? user.following : '----'}</p>
  </div> : 'No Info...'
}

export default Home;
