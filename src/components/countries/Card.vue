<template>
    <div>
      <!-- <div class="alert alert-success alert-dismissible fade show animated pulse" role="alert">
        data
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
          <i class="far fa-times-circle"></i>
        </button>
      </div> -->
      <h1>{{ country }}</h1>
      <form>
        <div class="form-group col-lg-6 col-sm-12">
          <div class="form-group row"> <!-- Nom -->
            <label for="name" class="col-3 col-form-label">Nom</label>
            <input v-model="form.name" type="text" class="col-9 form-control" id="name">
          </div>
          <div class="form-group row">
            <button type="button" @click="submit" class="btn btn-outline-success"><i class="far fa-save"></i> Enregistrer</button>
          </div>
        </div>
      </form>
    </div>
</template>

<script>

export default {
  data () { // Donnée à utiliser
    return {
      form: {
        name: null
      }
    }
  },
  computed: { // Au moment ou la page à finie de charger
    country () {
      return this.$store.getters['country/item']
    }
  },

  beforeUpdate () {

  },

  mounted () { // Lorsque le HTML est interpreté
    this.$store.dispatch('country/fetchCountryById', this.$route.params.countryid)
    this.$store.dispatch('country/fetchCountries')
    if (this.country) {
      console.log(this.country)
      this.form.name = this.country[0]['name']
    }
  },

  methods: {
    onSelect: function (element) {
      this.selectedElements = element
      // this.$set(this.form, 'no', element['ID'])
      // this.$set(this.form, 'name', element['Name'])
    },

    filter: function (id) {
      this.elementLabel = ''
      this.$set(this.form, 'name', '')
    },

    submit: function () {
      this.$store.dispatch('country/saveCountry', {no: this.$route.params.countryid, data: this.form})
    }
  }
}
</script>
