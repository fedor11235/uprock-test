import authApi from '@/api/auth.api';

class AuthService {
  async login(payload) {
    try {
      const user = await authApi.login(payload)
      localStorage.setItem('user', JSON.stringify(user.data))
      return user
    } catch (e) {
      console.error('failed to login', e)
    }
  }

  async register(payload) {
    try {
      const user = await authApi.login(payload)
      localStorage.setItem('user', JSON.stringify(user.data))
      return user
    } catch (e) {
      console.error('failed to register', e)
    }
  }

  logout() {
    localStorage.removeItem('user');
  }
}

export default new AuthService();