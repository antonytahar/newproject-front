import ApiPointing from '@/api/Pointing'
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
  // On récupère la liste des cities
  fetchPointings ({state, commit, dispatch}) {
    ApiPointing.allPointings().then((response) => {
      commit(types.POINTING_ADD, response.data.data)
    })
  },
  fetchPointingById ({state, commit, dispatch}, id) {
    // ApiPointing.show(id).then((response) => {
    commit(types.POINTING_ADD_ID, id)
    // })
  },
  createPointing ({state, commit, dispatch}, req) {
    return new Promise((resolve, reject) => {
      ApiPointing.createPointing(req).then((response) => {
        if (!response.data.error) {
          resolve(response)
        }
      })
    })
  },
  validatePointing ({state, commit, dispatch}, request) {
    return new Promise((resolve, reject) => {
      ApiPointing.validatePointing(request).then((response) => {
        if (!response.data.error) {
          resolve(response)
          commit(types.POINTING_DEL_ID, response.data.data)
        }
      })
    })
  },
  deletePointing ({state, commit, dispatch}, id) {
    return new Promise((resolve, reject) => {
      ApiPointing.deletePointing(id).then((response) => {
        if (!response.data.error) {
          resolve(response)
          commit(types.POINTING_DEL_ID, response.data.data)
        }
      })
    })
  }
}

// MUTATIONS - Permet de modifier l'état des objets du "State"
const mutations = {
  [types.POINTING_ADD] (state, data) {
    state.items = data
  },
  [types.POINTING_ADD_ID] (state, data) {
    state.item = state.items.filter((item) => item.id === data)
  },
  [types.POINTING_DEL_ID] (state, data) {
    console.log('la data ' + data)
    const index = state.items.findIndex((item) => item.id === parseInt(data))
    if (index !== -1) {
      state.items.splice(index, 1)
    }
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
