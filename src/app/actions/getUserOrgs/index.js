import * as axios from 'axios';
import requests from 'services/api';

const getUserOrgsReq = (userName) => dispatch => axios({
  method: 'get',
  url: requests.getUser + userName + '/orgs'
})
.then(res => {
  if (res.status === 200) {
    dispatch({
      type: 'SET_ORGS',
      payload: res.data
    });
    return Promise.resolve();
  }
})
.catch(_ => {
  dispatch({
    type: 'EMPTY_ORGS'
  });
});

export default getUserOrgsReq;
