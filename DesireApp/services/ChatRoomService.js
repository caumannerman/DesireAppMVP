import axios from 'axios';

import {API_V1_URL} from '../constants/constants';

class ChatRoomService {
  PAGINATION_LIMIT = 10;

  async create({senderId, recipientId}) {
    const data = {
      sender: senderId,
      recipient: recipientId,
    };

    return await axios
      .post(`${API_V1_URL}/chat-rooms/`, data)
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
    const params = {
      offset,
      limit,
      ordering,
      sender__id: senderId,
      recipient__id: recipientId,
    };

    return await axios
      .get(`${API_V1_URL}/chat-rooms/`, {params})
      .then(res => {
        return res;
      })
      .catch(err => {
        console.error(err.response.data);
      });
  }

  async getOne({id}) {
    return await axios
      .get(`${API_V1_URL}/chat-rooms/${id}/`)
      .then(res => {
        return res;
      })
      .catch(err => {
        console.error(err.response.data);
      });
  }
}

export default new ChatRoomService();
