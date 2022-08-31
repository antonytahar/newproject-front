import ApiPointing from '@/api/Pointing'
import * as types from '../mutation-types'
// import Vue from 'vue'

// CONSTANTES

// STATE
const state = {
  items: []
}

// GETTERS
const getters = {
  items: state => state.items
}

// ACTIONS
const actions = {
  // On récupère la liste des cities
  fetchPointings ({state, commit, dispatch}) {
    ApiPointing.allPointings().then((response) => {
      commit(types.POINTING_ADD, response.data.data)
    })
  },
  createPointing ({state, commit, dispatch}, req) {
    return new Promise((resolve, reject) => {
      ApiPointing.createPointing(req).then((response) => {
        if (!response.data.error) {
          resolve(response)
        }
      })
    })
  }
}

// MUTATIONS - Permet de modifier l'état des objets du "State"
const mutations = {
  [types.POINTING_ADD] (state, data) {
    state.items = data
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
