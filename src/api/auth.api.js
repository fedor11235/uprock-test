import { axiosInstance } from './common'

class AuthApi {
  login(payload) {
    return axiosInstance.post('/login', payload)
  }
  logout() {
    return axiosInstance.post('/logout')
  }
}

export default new AuthApi();