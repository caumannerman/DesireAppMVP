import axios from 'axios';

import {API_V1_URL} from '../constants/constants';

class UploadedAudioService {
  PAGINATION_LIMIT = 10;

  async create({name, file}) {
    const formData = new FormData();
    formData.append('name', name);
    formData.append('file', file);

    return await axios
      .post(`${API_V1_URL}/uploaded-audios/`, formData)
      .then(res => {
        return res;
      })
      .catch(err => {
        console.error(err.response.data);
      });
  }

  async getOne({id}) {
    return await axios
      .get(`${API_V1_URL}/uploaded-audios/${id}/`)
      .then(res => {
        return res;
      })
      .catch(err => {
        console.error(err.response.data);
      });
  }
}

export default new UploadedAudioService();
