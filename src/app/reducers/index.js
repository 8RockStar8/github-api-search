import { combineReducers } from 'redux';

import user from './user';
import orgs from './orgs';
import repos from './repos';

export default combineReducers({
  user,
  orgs,
  repos
});
