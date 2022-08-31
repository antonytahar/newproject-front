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
          <div class="form-group row"> <!-- Code Postal -->
            <label for="name" class="col-3 col-form-label">Code Postal</label>
            <input v-model="form.post_code" type="number" class="col-9 form-control" id="post_code" :rules="[rules.required]">
          </div>
          <div class="form-group row"> <!-- Nom -->
            <label for="name" class="col-3 col-form-label">Nom</label>
            <input v-model="form.name" type="text" class="col-9 form-control" id="name">
          </div>
          <div class="form-group row"> <!-- Latitude -->
            <label for="name" class="col-3 col-form-label">Latitude</label>
            <input v-model="form.latitude" type="text" class="col-9 form-control" id="latitude">
          </div>
          <div class="form-group row"> <!-- Longitude -->
            <label for="name" class="col-3 col-form-label">Longitude</label>
            <input v-model="form.longitude" type="text" class="col-9 form-control" id="longitude">
          </div>
          <div class="form-group row"> <!-- Pays -->
            <label for="name" class="col-3 col-form-label">Pays</label>
            <select v-model="form.country"> 
              <option v-for="country in countries" v-bind:key="country.id" v-bind:value="country.id">{{country.name}}</option>
            </select>
          </div>
          <div class="form-group row">
            <button type="submit" @click.stop.prevent="submit" :to="{ name: 'cities-table'}" class="btn btn-outline-success"><i class="far fa-save"></i> Enregistrer</button>
          </div>
        </div>
      </form>
    </div>
</template>

<script>
import Select from './Select'

export default {
  components: { 'multi-select': Select },
  data () { // Donnée à utiliser
    return {
      form: {
        post_code: null,
        name: null,
        latitude: null,
        longitude: null,
        country: null
      },
      rules: {
        required: value => !!value || 'Required.'
      }
    }
  },
  computed: { // Au moment ou la page à finie de charger
    countries () {
      return this.$store.getters['country/items']
    }
  },

  mounted () { // Lorsque le HTML est interpreté
    this.$store.dispatch('country/fetchCountries')
    if (this.city) {
      this.form.post_code = this.city[0]['post_code']
      this.form.name = this.city[0]['name']
      this.form.latitude = this.city[0]['latitude']
      this.form.longitude = this.city[0]['longitude']
      this.form.country = this.city[0]['country']['id']
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
      this.$store.dispatch('city/createCity', {data: this.form}).then((res) => {
        if (!res.data.error) {
          this.$router.push('table')
        }
      })
    }
  }
}
</script>
