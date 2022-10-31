import authApi from '@/api/auth.api';

class AuthService {
  async login(payload) {
    try {
      const res = await authApi.login(payload)
      if(res.status === 200) {
        return true
      }
    } catch (e) {
      return false
    }
  }

  logout() {
    localStorage.removeItem('user');
  }
}

export default new AuthService();