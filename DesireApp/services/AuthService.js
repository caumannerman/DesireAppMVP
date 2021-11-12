import axios from 'axios';

import {API_V1_URL} from '../constants/constants';
import {getRefreshToken, setAccessToken, setRefreshToken} from './utils';

async function login({email, password}) {
  const data = {email, password};

  return await axios
    .post(`${API_V1_URL}/auth/token/`, data)
    .then(async res => {
      setAccessToken(res.data.access);
      setRefreshToken(res.data.refresh);
    })
    .catch(err => {
      console.error(err.response.data);
    });
}

async function refreshTokens() {
  const data = {refresh: await getRefreshToken()};

  return await axios
    .post(`${API_V1_URL}/auth/token/refresh/`, data)
    .then(async res => {
      setAccessToken(res.data.access);
      setRefreshToken(res.data.refresh);
    })
    .catch(err => {
      console.error(err.response.data);
    });
}

export {login, refreshTokens};
