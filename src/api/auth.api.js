import axios from 'axios';

class AuthApi {
  login(payload) {
    return axios.post('/login', payload)
  }
  logout() {
    return axios.post('/logout')
  }
}

export default new AuthApi();