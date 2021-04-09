import * as axios from 'axios';
import requests from 'services/api';

const getUserReposReq = (userName) => dispatch => axios({
  method: 'get',
  url: requests.getUser + userName + '/repos'
})
.then(res => {
  if (res.status === 200) {
    dispatch({
      type: 'SET_REPOS',
      payload: res.data
    });
    return Promise.resolve();
  }
})
.catch(_ => {
  dispatch({
    type: 'EMPTY_REPOS'
  });
});

export default getUserReposReq;
