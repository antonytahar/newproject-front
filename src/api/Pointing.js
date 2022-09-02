import axios from '@/api/AxiosSetup'

export default {
  base: '/pointing',

  allPointings () {
    return axios.get(`${this.base}/allPointings`)
  },

  show (id) {
    return axios.get(`${this.base}/${id}`)
  },

  savePointing (pointing) {
    return axios.post(`${this.base}/save`, pointing)
  },

  validatePointing (request) {
    return axios.put(`${this.base}/validatePointing`, request)
  },

  deletePointing (id) {
    return axios.post(`${this.base}/${id}`)
  },

  createPointing (pointing) {
    return axios.post(`${this.base}/create`, pointing)
  }

}
