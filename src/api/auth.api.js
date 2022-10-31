import axios from 'axios';

class AuthApi {
  login(payload) {
    console.log('start AuthApi')
    return axios.post('/login', payload)
  }
}

export default new AuthApi();