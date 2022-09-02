import ApiUser from '@/api/User'
import * as types from '../mutation-types'
// import Vue from 'vue'

// CONSTANTES

// STATE
const state = {
  items: [],
  item: []
}

// GETTERS
const getters = {
  items: state => state.items,
  item: state => state.item
}

// ACTIONS
const actions = {
  // On récupère la liste des utilisateurs
  fetchUsers ({state, commit, dispatch}) {
    ApiUser.allUsers().then((response) => {
      commit(types.USER_ADD, response.data.data)
    })
  },

  fetchUserById ({state, commit, dispatch}, id) {
    // ApiUser.userById(id).then((response) => {
    commit(types.USER_ADD_ID, id)
    // })
  }
}

// MUTATIONS - Permet de modifier l'état des objets du "State"
const mutations = {
  [types.USER_ADD] (state, data) {
    state.items = data
  },
  [types.USER_ADD_ID] (state, data) {
    state.item = state.items.filter((item) => item.id === data)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
