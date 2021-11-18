import axios from 'axios';

import {API_V1_URL} from '../constants/constants';

class AnswerService {
  PAGINATION_LIMIT = 20;

  async create({userId, content, questionId}) {
    const data = {
      user: userId,
      content,
      question: questionId,
    };

    return await axios
      .post(`${API_V1_URL}/answers/`, data)
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
    const params = {
      offset,
      limit,
      ordering,
      user__id: userId,
      question__id:questionId,
    };

    return await axios
      .get(`${API_V1_URL}/answers/`, {params})
      .then(res => {
        return res;
      })
      .catch(err => {
        console.error(err.response.data);
      });
  }

  async getOne({id}) {
    return await axios
      .get(`${API_V1_URL}/answers/${id}/`)
      .then(res => {
        return res;
      })
      .catch(err => {
        console.error(err.response.data);
      });
  }
}

export default new AnswerService();
