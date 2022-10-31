import axios from 'axios';

class UserApi {
  getUser() {
    return axios.get('/user');
  }
}

export default new UserApi();