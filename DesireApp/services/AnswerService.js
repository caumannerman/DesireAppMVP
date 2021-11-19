import axios from 'axios';

import {API_V1_URL} from '../constants/constants';
import {refreshTokens} from './AuthService';
import {getAuthHeader} from './utils';

class AnswerService {
  PAGINATION_LIMIT = 20;

  async create({
    userId,
    content,
    questionId,
    uploadedAudioId,
    uploadedImageId,
    uploadedFileId,
    uploadedVideoId,
  }) {
    await refreshTokens();

    const authHeader = await getAuthHeader();
    const data = {
      user: userId,
      content,
      question: questionId,
      uploaded_audio: uploadedAudioId,
      uploaded_image: uploadedImageId,
      uploaded_file: uploadedFileId,
      uploaded_video: uploadedVideoId,
    };

    return await axios
      .post(`${API_V1_URL}/answers/`, data, {headers: authHeader})
      .then(res => {
        return res;
      })
      .catch(err => {
        console.error(err.response.data);
      });
  }

  async getList({
    offset = 0,
    limit = this.PAGINATION_LIMIT,
    ordering = '-created_on',
    userId,
    questionId,
  }) {
    await refreshTokens();

    const authHeader = await getAuthHeader();
    const params = {
      offset,
      limit,
      ordering,
      user__id: userId,
      question__id: questionId,
    };

    return await axios
      .get(`${API_V1_URL}/answers/`, {params, headers: authHeader})
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
      .get(`${API_V1_URL}/answers/${id}/`, {headers: authHeader})
      .then(res => {
        return res;
      })
      .catch(err => {
        console.error(err.response.data);
      });
  }
}

export default new AnswerService();
