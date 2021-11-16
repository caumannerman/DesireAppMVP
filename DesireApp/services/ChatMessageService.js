import axios from 'axios';

import {API_V1_URL} from '../constants/constants';

class ChatMessageService {
  PAGINATION_LIMIT = 30;

  async create({
    userId,
    chatRoomId,
    content,
    uploadedAudioId,
    uploadedImageId,
    uploadedFileId,
    uploadedVideoId,
  }) {
    const data = {
      user: userId,
      chatroom: chatRoomId,
      content,
      uploaded_audio: uploadedAudioId,
      uploaded_image: uploadedImageId,
      uploaded_file: uploadedFileId,
      uploaded_video: uploadedVideoId,
    };

    return await axios
      .post(`${API_V1_URL}/chat-messages/`, data)
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
    const params = {
      offset,
      limit,
      ordering,
      user__id: userId,
      chatroom__id: chatRoomId,
    };

    return await axios
      .get(`${API_V1_URL}/chat-messages/`, {params})
      .then(res => {
        return res;
      })
      .catch(err => {
        console.error(err.response.data);
      });
  }

  async getOne({id}) {
    return await axios
      .get(`${API_V1_URL}/chat-messages/${id}/`)
      .then(res => {
        return res;
      })
      .catch(err => {
        console.error(err.response.data);
      });
  }
}

export default new ChatMessageService();
