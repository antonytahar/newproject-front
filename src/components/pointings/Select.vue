<template>
  <div>
    <select v-model="selectedElement"> 
      <option v-for="user in users" v-bind:key="user.id" v-bind:value="user.id">{{user.name}}</option>
    </select>
  </div>
</template>

<script>
import Multiselect from 'vue-multiselect'
import ApiUser from '@/api/User'

export default {
  components: { Multiselect },

  mounted () {
    this.$store.dispatch('user/fetchUsers')
  },

  computed: { // Au moment ou la page à finie de charger
    users () {
      this.elements = this.$store.getters['user/items']
      return this.$store.getters['user/items']
    }
  },

  data () {
    return {
      selectedElements: [],
      elements: [],
      isLoading: false
    }
  },

  methods: {
    selectedElement (value, id) {
      ApiUser.find(value['id']).then((res) => {
        value = res.data.data
        this.$emit('valueSelected', value)
      })
    },

    elementLabel ({ id, name }) {
      return `${id} - ${name}`
    },

    asyncFind (query) {
      this.isLoading = true
      ApiUser.find(query).then((res) => {
        this.elements = res.data.data
        this.isLoading = false
      })
    }
  }
}
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
