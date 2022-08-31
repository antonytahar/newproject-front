<template>
    <div>
      <!-- <div class="alert alert-success alert-dismissible fade show animated pulse" role="alert">
        data
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
          <i class="far fa-times-circle"></i>
        </button>
      </div> -->
      <form>
        <div class="form-group col-lg-6 col-sm-12">
          <div class="form-group row"> <!-- Nom -->
            <label for="name" class="col-3 col-form-label">Nom</label>
            <input v-model="form.name" type="text" class="col-9 form-control" id="name" :rules="rules">
          </div>
          <div class="form-group row">
            <button type="submit" @click.stop.prevent="submit" :to="{ name: 'countries-table'}" class="btn btn-outline-success"><i class="far fa-save"></i> Enregistrer</button>
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
      },
      rules: [
        value => !!value || 'Required.']
    }
  },
  computed: { // Au moment ou la page à finie de charger
    countries () {
      return this.$store.getters['country/items']
    }
  },

  mounted () { // Lorsque le HTML est interpreté
    this.$store.dispatch('country/fetchCountries')
    if (this.country) {
      this.form.name = this.country['name']
    }
  },

  methods: {
    onSelect: function (element) {
      this.selectedElements = element
    },

    filter: function (id) {
      this.elementLabel = ''
      this.$set(this.form, 'name', '')
    },

    submit: function () {
      this.$store.dispatch('country/createCountry', this.form).then((res) => {
        if (!res.data.error) {
          this.$router.push('table')
        }
      })
    }
  }
}
</script>
