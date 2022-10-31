import axios from 'axios';

class UserApi {
  getUserBoard(payload) {
    return axios.get('/user', payload);
  }
}

export default new UserApi();