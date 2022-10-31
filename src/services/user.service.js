import userApi from '@/api/user.api';

class UserService {
  async getUser() {
    try {
      const user =  await userApi.getUser()
      return user.data
    } catch(e) {
      console.error('failed to user', e)
    }
  }
}

export default new UserService();