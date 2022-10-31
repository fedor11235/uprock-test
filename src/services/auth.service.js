import authApi from '@/api/auth.api';

class AuthService {
  async login(payload) {
    try {
      const res = await authApi.login(payload)
      if(res.status === 200) {
        return true
      }
    } catch (e) {
      if(e.response.status === 401) {
        return false
      }
      console.log('the request failed ', e)
    }
  }

  async logout() {
    try {
      await authApi.logout()
    } catch (e) {
      console.log('the request failed ', e)
    }
  }
}

export default new AuthService();