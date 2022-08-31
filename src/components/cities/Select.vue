<template>
  <div>
    <select v-model="selectedElement"> 
      <option v-for="country in countries" v-bind:key="country.id" v-bind:value="country.id">{{country.name}}</option>
    </select>
  </div>
</template>

<script>
import Multiselect from 'vue-multiselect'
import ApiCountry from '@/api/Country'

export default {
  components: { Multiselect },

  mounted () {
    this.$store.dispatch('country/fetchCountries')
  },

  computed: { // Au moment ou la page à finie de charger
    countries () {
      this.elements = this.$store.getters['country/items']
      return this.$store.getters['country/items']
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
      ApiCountry.find(value['id']).then((res) => {
        value = res.data.data
        this.$emit('valueSelected', value)
      })
    },

    elementLabel ({ id, name }) {
      return `${id} - ${name}`
    },

    asyncFind (query) {
      this.isLoading = true
      ApiCountry.find(query).then((res) => {
        this.elements = res.data.data
        this.isLoading = false
      })
    }
  }
}
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
