import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {API_V1_URL, storageKeys} from '../constants/constants';
import {refreshTokens} from './AuthService';
import {getAuthHeader} from './utils';
async function login({email, password}) {
  const data = {email, password};

  return await axios
    .post(`${API_V1_URL}/auth/token/`, data)
    .then(async res => {
      await AsyncStorage.setItem(storageKeys.ACCESS_TOKEN_KEY, res.data.access);
      await AsyncStorage.setItem(
        storageKeys.REFRESH_TOKEN_KEY,
        res.data.refresh,
      );
      await AsyncStorage.setItem(storageKeys.USER_ID_KEY, res.data.user.id);
      await AsyncStorage.setItem(
        storageKeys.ACCOUNT_TYPE_KEY,
        res.data.user.acc_type,
      );
    })
    .catch(err => {
      console.error(err.response.data);
    });
}

async function logout() {
  await AsyncStorage.removeItem(storageKeys.ACCESS_TOKEN_KEY);
  await AsyncStorage.removeItem(storageKeys.REFRESH_TOKEN_KEY);
  await AsyncStorage.removeItem(storageKeys.USER_ID_KEY);
  await AsyncStorage.removeItem(storageKeys.ACCOUNT_TYPE_KEY);

  console.debug('로그아웃 성공');
}

async function refreshTokens() {
  const refresh = await AsyncStorage.getItem(storageKeys.REFRESH_TOKEN_KEY);
  const data = {refresh};

  return await axios
    .post(`${API_V1_URL}/auth/token/refresh/`, data)
    .then(async res => {
      await AsyncStorage.setItem(storageKeys.ACCESS_TOKEN_KEY, res.data.access);
      await AsyncStorage.setItem(
        storageKeys.REFRESH_TOKEN_KEY,
        res.data.refresh,
      );
      await AsyncStorage.setItem(storageKeys.USER_ID_KEY, res.data.user.id);
      await AsyncStorage.setItem(
        storageKeys.ACCOUNT_TYPE_KEY,
        res.data.user.acc_type,
      );
    })
    .catch(err => {
      console.error(err.response.data);
    });
}

export {login, logout, refreshTokens};
