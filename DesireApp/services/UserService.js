import axios from 'axios';
import {API_V1_URL} from '../constants/constants';

async function registerUser({
  email,
  password,
  nickname,
  designFields,
  mmChoice,
  profileImage,
}) {
  const formData = new FormData();

  formData.append('email', email);
  formData.append('password', password);
  formData.append('nickname', nickname);

  // UI/UX, BI/BX, 제품디자인, 시각디자인 중 택 여러 개 (designFields = ["UI/UX", "제품디자인"])
  designFields.map(designField => {
    formData.append('design_fields', designField);
  });

  // "ME", "MO"
  formData.append('acc_type', mmChoice);

  //formData.append('profile_image', profileImage);

  return await axios
    .post(`${API_V1_URL}/users/`, formData)
    .then(() => {})
    .catch(err => {
      console.error(err.response.data);
    });
}

export {registerUser};
