import axios from 'axios';

import {API_V1_URL} from '../constants/constants';
import {refreshTokens} from './AuthService';
import {getAuthHeader} from './utils';
class ChatMessageService {
  PAGINATION_LIMIT = 30;

  async create({userId, chatRoomId, content}) {
    await refreshTokens();

    const authHeader = await getAuthHeader();
    const data = {
      user: userId,
      chatroom: chatRoomId,
      content,
    };

    return await axios
      .post(`${API_V1_URL}/chat-messages/`, data, {headers: authHeader})
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
    chatRoomId,
  }) {
    await refreshTokens();

    const authHeader = await getAuthHeader();
    const params = {
      offset,
      limit,
      ordering,
      user__id: userId,
      chatroom__id: chatRoomId,
    };

    return await axios
      .get(`${API_V1_URL}/chat-messages/`, {params, headers: authHeader})
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
      .get(`${API_V1_URL}/chat-messages/${id}/`, {headers: authHeader})
      .then(res => {
        return res;
      })
      .catch(err => {
        console.error(err.response.data);
      });
  }
}

export default new ChatMessageService();
