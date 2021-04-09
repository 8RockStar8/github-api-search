import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Switch, Route } from 'react-router-dom';

import { getUserReq } from 'app/actions';

import Input from 'components/input';
import Button from 'components/button';

import './header.css';

const Header = _ => {
  const [ userName, setUserName ] = useState('');
  const [ searchErrorText, setSearchErrorText ] = useState('');

  const dispatch = useDispatch();

  const handleSetUserName = e => {
    setSearchErrorText('');
    setUserName(e.target.value);
  }

  const handleSearchUser = _ => {
    if (userName === '') {
      setSearchErrorText('Search field is empty, please fill it.');
      dispatch({
        type: 'EMPTY_USER'
      });
      return;
    }
    dispatch(getUserReq(userName.split(' ').join('')))
      .then(_ => {
        setUserName('');
        setSearchErrorText('');
      })
      .catch(err => {
        console.clear();
        setSearchErrorText(err);
      });
  }

  const handleClearStore = _ => {
    dispatch({
      type: 'EMPTY_USER'
    });
    dispatch({
      type: 'EMPTY_REPOS'
    });
    dispatch({
      type: 'EMPTY_ORGS'
    });
  }

  return <header>
    <Switch>
      <Route exact path='/'>
        <div className='search-place'>
          <h1 className='search-place-title'>Github</h1>
          <div className='search-top-place'>
            <div className='search-inp-place'>
              <Input
                type='text'
                value={userName}
                placeholder='Search user by name...'
                onInput={handleSetUserName}
                onSubmit={handleSearchUser}
              />
            </div>
            <div className='search-btn btn-place'>
              <Button type='button' label='Search' onClick={handleSearchUser} />
            </div>
          </div>
          <p className='searcch-error-text'>{searchErrorText}</p>
        </div>
      </Route>
      <Route>
        <div className='back-btn-place'>
          <div className='back-btn'>
            <Link to='/'>
              <Button type='button' label='Back to search' onClick={handleClearStore} />
            </Link>
          </div>
        </div>
      </Route>
    </Switch>
  </header>
}

export default Header;
