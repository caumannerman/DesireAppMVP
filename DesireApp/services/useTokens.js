import {useState} from 'react';
import {gcs} from './types';

export default function useTokens() {
  const getTokens = async () => {
    const tokens = {
      accessToken: await AsyncStorage.getItem('accessToken'),
      refreshToken: await AsyncStorage.getItem('refreshToken'),
    };

    return tokens;
  };

  const [tokens, setTokens] = useState(getTokens());

  const isLoggedIn = (() => {
    return !!(tokens && tokens.accessToken);
  })();

  async function saveTokens(tokens) {
    if (tokens) {
      await AsyncStorage.setItem('accessToken', accessToken);
      await AsyncStorage.setItem('refreshToken', refreshToken);

      const tokens = {
        accessToken: await AsyncStorage.getItem('accessToken'),
        refreshToken: await AsyncStorage.getItem('refreshToken'),
      };

      setTokens(tokens);
    }
  }

  return {
    setTokens: saveTokens,
    tokens,
    isLoggedIn,
  };
}
