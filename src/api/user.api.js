import { axiosInstance } from './common'

class UserApi {
  getUser() {
    return axiosInstance.get('/user');
  }
}

export default new UserApi();