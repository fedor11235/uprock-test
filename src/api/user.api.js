import { apiClient } from './common'

class UserApi {
  getUser() {
    return apiClient.get('/user');
  }
}

export default new UserApi();