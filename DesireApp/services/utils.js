import AsyncStorage from '@react-native-async-storage/async-storage';

async function getAuthHeader() {
  const accessToken = await AsyncStorage.getItem('accessToken');

  if (accessToken) {
    return {Authorization: `Bearer ${accessToken}`};
  } else {
    return {};
  }
}

function getFormDataHeader() {
  return {'Content-Type': 'multipart/form-data'};
}

async function logOut() {
  await AsyncStorage.removeItem('accessToken');
  await AsyncStorage.removeItem('refreshToken');
}

export {getAuthHeader, getFormDataHeader, logOut};
