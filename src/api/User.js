import axios from '@/api/AxiosSetup'

export default {
  base: '/user',

  allUsers () {
    return axios.get(`${this.base}/allUsers`)
  },

  userById (id) {
    return axios.get(`${this.base}/${id}`)
  }
}
