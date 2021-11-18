import axios from 'axios';

import {API_V1_URL} from '../constants/constants';

class QuestionService {
  PAGINATION_LIMIT = 20;

  async create({userId, title, questionText, categories}) {
    await refreshTokens();

    const authHeader = await getAuthHeader();
    const data = {
      user: userId,
      title,
      question_text: questionText,
      categories,
    };

    return await axios
      .post(`${API_V1_URL}/questions/`, data, {headers: authHeader})
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
    categoryNamesIn,
  }) {
    await refreshTokens();

    const authHeader = await getAuthHeader();
    const params = {
      offset,
      limit,
      ordering,
      user__id: userId,
      categories__name__in: categoryNamesIn,
    };

    return await axios
      .get(`${API_V1_URL}/questions/`, {params, headers: authHeader})
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
      .get(`${API_V1_URL}/questions/${id}/`, {headers: authHeader})
      .then(res => {
        return res;
      })
      .catch(err => {
        console.error(err.response.data);
      });
  }
}

export default new QuestionService();
