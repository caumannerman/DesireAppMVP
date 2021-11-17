import axios from 'axios';

import {API_V1_URL} from '../constants/constants';

class UploadedVideoService {
  PAGINATION_LIMIT = 10;

  async create({name, file}) {
    await refreshTokens();

    const authHeader = await getAuthHeader();

    const formData = new FormData();
    formData.append('name', name);
    formData.append('file', file);

    return await axios
      .post(`${API_V1_URL}/uploaded-videos/`, formData, {headers: authHeader})
      .then(res => {
        return res;
      })
      .catch(err => {
        console.error(err.response.data);
      });
  }

  async getOne({id}) {
    await refreshTokens();

    const authHeader = await getAuthHeader();

    return await axios
      .get(`${API_V1_URL}/uploaded-videos/${id}/`, {headers: authHeader})
      .then(res => {
        return res;
      })
      .catch(err => {
        console.error(err.response.data);
      });
  }
}

export default new UploadedVideoService();
