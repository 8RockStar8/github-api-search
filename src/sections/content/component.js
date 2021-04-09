import React, { Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';
import Loader from 'react-loader-spinner';

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import './content.css';

const Home = lazy(_ => import('pages/home'));
const User = lazy(_ => import('pages/user'));
const NotFound = lazy(_ => import('pages/notFound'));

const Content = () => {
  return <div className='content'>
    <Suspense
      fallback={
        <Loader
          width={75}
          height={75}
          timeout={-1}
          color='#00BFFF'
          type='BallTriangle'
          style={{position: 'fixed', left: '50%', top: '50%'}}
        />
      }
    >
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/user'>
          <User />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </Suspense>
  </div>
}

export default Content;
