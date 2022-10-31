import axios from 'axios';

class AuthApi {
  login(payload) {
    return axios.post('/login', payload)
  }
}

export default new AuthApi();