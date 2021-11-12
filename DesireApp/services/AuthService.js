import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {API_V1_URL} from '../constants/constants';

async function login({email, password}) {
  const data = {email, password};

  return await axios
    .post(`${API_V1_URL}/auth/token/`, data)
    .then(async res => {
      await AsyncStorage.setItem('accessToken', res.data.access);
      await AsyncStorage.setItem('refreshToken', res.data.refresh);
    })
    .catch(err => {
      console.error(err.response.data);
    });
}

async function refreshTokens() {
  const refresh = await AsyncStorage.getItem('refreshToken');
  const data = {refresh};

  return await axios
    .post(`${API_V1_URL}/auth/token/refresh/`, data)
    .then(async res => {
      await AsyncStorage.setItem('accessToken', accessToken);
      await AsyncStorage.setItem('refreshToken', refreshToken);
    })
    .catch(err => {
      console.error(err.response.data);
    });
}

export {login, refreshTokens};
