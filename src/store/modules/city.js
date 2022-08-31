import ApiCity from '@/api/City'
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
  fetchCities ({state, commit, dispatch}) {
    ApiCity.allCities().then((response) => {
      commit(types.CITY_ADD, response.data.data)
    })
  },
  fetchCityById ({state, commit, dispatch}, id) {
    // ApiCity.show(id).then((response) => {
    commit(types.CITY_ADD_ID, id)
    // })
  },
  saveCity ({state, commit, dispatch}, req) {
    ApiCity.saveCity(req).then((response) => {
      commit(types.CITY_ADD, response.data.data)
    })
  },
  deleteCity ({state, commit, dispatch}, id) {
    return new Promise((resolve, reject) => {
      ApiCity.deleteCity(id).then((response) => {
        if (!response.data.error) {
          resolve(response)
          commit(types.CITY_DEL_ID, response.data.data)
        }
      })
    })
  },
  createCity ({state, commit, dispatch}, req) {
    return new Promise((resolve, reject) => {
      ApiCity.createCity(req).then((response) => {
        if (!response.data.error) {
          resolve(response)
        }
      })
    })
  }
}

// MUTATIONS - Permet de modifier l'état des objets du "State"
const mutations = {
  [types.CITY_ADD] (state, data) {
    state.items = data
  },
  [types.CITY_ADD_ID] (state, data) {
    state.item = state.items.filter((item) => item.id === data)
  },
  [types.CITY_DEL_ID] (state, data) {
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
