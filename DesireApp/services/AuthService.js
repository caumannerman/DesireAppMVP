import axios from 'axios';
import {API_V1_URL} from '../constants/constants';

async function login({email, password}) {
  const data = {email, password};

  return await axios
    .post(`${API_V1_URL}/auth/token/`, data)
    .then(res => {
      console.log(res.data);
    })
    .catch(err => {
      console.error(err.response.data);
    });
}

export {login};
