/**
 * Created by koyexes on 14/09/2017.
 */

import React from 'react';
import { BrowserRouter, Match, Miss } from 'react-router';

import App from './components/App';
import StorePicker from './components/StorePicker';
import NotFound from './components/NotFound';

const Routes = () => {
  return (
    <BrowserRouter >
      <div >
        <Match exactly pattern="/" component={ StorePicker } />
        <Match pattern="/store/:storeId" component={ App }/>
        <Miss component={ NotFound }/>
      </div>
    </BrowserRouter>
  )
};


export default Routes;