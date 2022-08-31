import axios from '@/api/AxiosSetup'

export default {
  base: '/country',

  allCountries () {
    return axios.get(`${this.base}/allCountries`)
  },

  show (id) {
    return axios.get(`${this.base}/${id}`)
  },

  saveCountry (country) {
    return axios.post(`${this.base}/save`, country)
  },

  deleteCountry (id) {
    return axios.post(`${this.base}/${id}`)
  },

  createCountry (country) {
    return axios.post(`${this.base}/create`, country)
  }
}
