import * as axios from 'axios';
import requests from 'services/api';

const getUserReq = (userName) => dispatch => axios({
  method: 'get',
  url: requests.getUser + userName
})
.then(res => {
  if (res.status === 200) {
    dispatch({
      type: 'SET_USER',
      payload: res.data
    });
    return Promise.resolve();
  }
})
.catch(err => {
  if (err.response.status === 404) {
    dispatch({
      type: 'EMPTY_USER'
    });
    return Promise.reject(err.response.data.message);
  }
});

export default getUserReq;
