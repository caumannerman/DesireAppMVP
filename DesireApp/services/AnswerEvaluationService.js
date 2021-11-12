import axios from 'axios';

import {API_V1_URL} from '../constants/constants';

class AnswerEvaluationService {
  PAGINATION_LIMIT = 10;

  async create({userId, answerId, evaluation}) {
    const data = {
      user: userId,
      answer: answerId,
      evaluation,
    };

    return await axios
      .post(`${API_V1_URL}/answer-evaluations/`, data)
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
    answerId,
    evaluation,
  }) {
    const params = {
      offset,
      limit,
      ordering,
      user__id: userId,
      answer__id: answerId,
      evaluation,
    };

    return await axios
      .get(`${API_V1_URL}/answer-evaluations/`, {params})
      .then(res => {
        return res;
      })
      .catch(err => {
        console.error(err.response.data);
      });
  }

  async getOne({id}) {
    return await axios
      .get(`${API_V1_URL}/answer-evaluations/${id}/`)
      .then(res => {
        return res;
      })
      .catch(err => {
        console.error(err.response.data);
      });
  }
}

export default new AnswerEvaluationService();
