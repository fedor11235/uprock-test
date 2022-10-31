import AuthService from '../services/auth.service';
import userService from '../services/user.service';

const loggedIn = JSON.parse(localStorage.getItem('loggedIn'));
const initialState = loggedIn
  ? { status: { loggedIn: true } }
  : { status: { loggedIn: false } };

export const auth = {
  namespaced: true,
  state: initialState,
  mutations: {
    LOGIN_SUCCESS(state) {
      state.status.loggedIn = true;
    },
    USER_SUCCESS(state, user) {
      state.user = user;
    },
    AUTHORIZATION_FAILURE(state) {
      state.status.loggedIn = false;
      state.user = null;
    },
    LOGOUT(state) {
      state.status.loggedIn = false;
      state.user = null;
    }
  },
  actions: {
    async login({ commit }, payload) {
      const ifLogin = await AuthService.login(payload)
      if(ifLogin) {
        localStorage.setItem('loggedIn', true);
        commit('LOGIN_SUCCESS')
      } else {
        localStorage.removeItem('loggedIn');
        commit('AUTHORIZATION_FAILURE')
      }
      return ifLogin
    },
    async setUser({ commit }) {
      const user = await userService.getUser()
      if(user) {
        commit('USER_SUCCESS', user)
      } else {
        localStorage.removeItem('loggedIn');
        commit('AUTHORIZATION_FAILURE')
      }
    },
    async logout({ commit }) {
      await AuthService.logout();
      localStorage.removeItem('loggedIn');
      commit('LOGOUT');
    },
  }
};