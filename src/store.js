import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    member: {}

  },
  mutations: {
    STORE_AUTHENTICATED_MUTATION: function (state, newInfo) {
      state.member = newInfo
    },
    DELETE_AUTHENTICATED_MUTATION: function (state, info) {
      state.member.authStatus = info
    }

  },
  actions: {
    STORE_AUTHENTICATED: function ({ commit }, newInfo) {
      let setNew = {
        authStatus: true,
        userProfile: newInfo
      }
      commit('STORE_AUTHENTICATED_MUTATION', setNew)
    },

    DELETE_AUTHENTICATED: function ({ commit }, updateInfo) {
      let deleteInfo = {
        authStatus: updateInfo,
        userProfile: {}
      }
      commit('DELETE_AUTHENTICATED_MUTATION', deleteInfo)
    }
  }
})
