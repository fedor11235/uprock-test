import authHeader from './auth-header';
import uaerApi from '@/api/uaer.api';

class UserService {
  async getUserBoard() {
    try {
      const user =  await uaerApi.getUserBoard({ headers: authHeader() })
      return user
    } catch(e) {
      console.error('failed to user', e)
    }
  }
}

export default new UserService();