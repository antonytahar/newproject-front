import ApiCountry from '@/api/Country'
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
  // On récupère la liste des countries
  fetchCountries ({state, commit, dispatch}) {
    ApiCountry.allCountries().then((response) => {
      commit(types.COUNTRY_ADD, response.data.data)
    })
  },
  fetchCountryById ({state, commit, dispatch}, id) {
    // ApiCountry.show(id).then((response) => {
    commit(types.COUNTRY_ADD_ID, id)
    // })
  },
  saveCountry ({state, commit, dispatch}, req) {
    ApiCountry.saveCountry(req).then((response) => {
      commit(types.COUNTRY_ADD, response.data.data)
    })
  },
  deleteCountry ({state, commit, dispatch}, id) {
    return new Promise((resolve, reject) => {
      ApiCountry.deleteCountry(id).then((response) => {
        if (!response.data.error) {
          resolve(response)
          commit(types.COUNTRY_DEL_ID, response.data.data)
        }
      })
    })
  },
  createCountry ({state, commit, dispatch}, req) {
    return new Promise((resolve, reject) => {
      ApiCountry.createCountry(req).then((response) => {
        if (!response.data.error) {
          resolve(response)
        }
      })
    })
  }
//   saveTicket ({state, commit, dispatch}, req) {
//     ApiTicket.saveTicket(req).then((response) => {
//       commit(types.TICKET_ADD, response.data.data)
//     })
//   }
}

// MUTATIONS - Permet de modifier l'état des objets du "State"
const mutations = {
  [types.COUNTRY_ADD] (state, data) {
    state.items = data
  },
  [types.COUNTRY_ADD_ID] (state, data) {
    state.item = state.items.filter((item) => item.id === data)
  },
  [types.COUNTRY_DEL_ID] (state, data) {
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
