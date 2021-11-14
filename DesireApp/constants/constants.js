const API_URL = 'http://localhost:8000';

const API_V1_URL = `${API_URL}/api/v1`;

/** AsyncStorage 내에서 참조할 키 */
const storageKeys = {
  /** AsyncStorage 내 액세스 토큰 키 */
  ACCESS_TOKEN_KEY: 'accessToken',

  /** AsyncStorage 내 리프레시 토큰 키 */
  REFRESH_TOKEN_KEY: 'refreshToken',

  /** AsyncStorage 내 사용자 ID 키 */
  USER_ID_KEY: 'userId',

  /** AsyncStorage 내 멘토 여부 키 */
  ACCOUNT_TYPE_KEY: 'accType',
};

export {API_URL, API_V1_URL, storageKeys};
