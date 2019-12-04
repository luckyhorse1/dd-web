import {login} from '@/api/login'
import {getToken, setToken, removeToken} from '@/utils/auth'

const user = {
  state: {
    token: getToken()
  },

  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    }
  },

  actions: {
    Login({ commit }, userInfo){
      return new Promise((resolve, reject) => {
        login(userInfo.username, userInfo.password).then(response => {
          console.log('haha')
          const data = response.data
          const tokenStr = data.tokenHead+data.token
          setToken(tokenStr)
          commit('SET_TOKEN', tokenStr)
          resolve()
        }).catch(errot => {
          reject(error)
        })
      })
    }

  }
}

export default user
