import axios from '@/api/AxiosSetup'

export default {
  base: '/city',

  allCities () {
    return axios.get(`${this.base}/allCities`)
  },

  show (id) {
    return axios.get(`${this.base}/${id}`)
  },

  saveCity (city) {
    return axios.post(`${this.base}/save`, city)
  },

  deleteCity (id) {
    return axios.post(`${this.base}/${id}`)
  },

  createCity (city) {
    return axios.post(`${this.base}/create`, city)
  }

}
