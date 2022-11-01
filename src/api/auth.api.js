import { apiClient } from './common'

class AuthApi {
  login(payload) {
    return apiClient.post('/login', payload)
  }
  logout() {
    return apiClient.post('/logout')
  }
}

export default new AuthApi();