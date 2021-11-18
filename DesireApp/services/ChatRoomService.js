import axios from 'axios';

import {API_V1_URL} from '../constants/constants';
import {refreshTokens} from './AuthService';
import {getAuthHeader} from './utils';
class ChatRoomService {
  PAGINATION_LIMIT = 10;

  async create({senderId, recipientId}) {
    await refreshTokens();

    const authHeader = await getAuthHeader();
    const data = {
      sender: senderId,
      recipient: recipientId,
    };

    return await axios
      .post(`${API_V1_URL}/chat-rooms/`, data, {headers: authHeader})
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
    senderId,
    recipientId,
  }) {
    await refreshTokens();

    const authHeader = await getAuthHeader();
    const params = {
      offset,
      limit,
      ordering,
      sender__id: senderId,
      recipient__id: recipientId,
    };

    return await axios
      .get(`${API_V1_URL}/chat-rooms/`, {params, headers: authHeader})
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
      .get(`${API_V1_URL}/chat-rooms/${id}/`, {headers: authHeader})
      .then(res => {
        return res;
      })
      .catch(err => {
        console.error(err.response.data);
      });
  }
}

export default new ChatRoomService();
