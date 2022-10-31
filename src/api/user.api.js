import axios from 'axios';

const API_URL = 'http://localhost:8080/api/test/';

class UserApi {
  getUserBoard(payload) {
    return axios.get(API_URL + 'user', payload);
  }
}

export default new UserApi();