import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import ticket from './modules/ticket'
import city from './modules/city'
import country from './modules/country'
import pointing from './modules/pointing'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({     // OBLIGATOIRE répertoriation du module city créé pour le rendre utilisable
  strict: debug,
  modules: {
    user,
    ticket,
    city,
    country,
    pointing
  }
})
