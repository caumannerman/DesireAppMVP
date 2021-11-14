import {useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {storageKeys} from '../constants/constants';

export default function useAuth() {
  const getAuth = async () => {
    const auth = {
      accessToken: await AsyncStorage.getItem(storageKeys.ACCESS_TOKEN_KEY),
      refreshToken: await AsyncStorage.getItem(storageKeys.REFRESH_TOKEN_KEY),
      userId: await AsyncStorage.getItem(storageKeys.USER_ID_KEY),
      accType: await AsyncStorage.getItem(storageKeys.ACCOUNT_TYPE_KEY),
    };

    return auth;
  };

  const isLoggedIn = async () => {
    const accessToken = await AsyncStorage.getItem(
      storageKeys.ACCESS_TOKEN_KEY,
    );
    return accessToken ? true : false;
  };

  return {
    getAuth,
    isLoggedIn,
  };
}
