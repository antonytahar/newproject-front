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
          <div class="form-group row"> <!-- Titre -->
            <label for="name" class="col-3 col-form-label">Titre</label>
            <input v-model="form.title" type="text" class="col-9 form-control" id="title" :rules="[rules.required]">
          </div>
          <div class="form-group row"> <!-- Durée -->
            <label for="name" class="col-3 col-form-label">Durée</label>
            <input v-model="form.duration" type="time" class="col-9 form-control" id="duration">
          </div>
          <div class="form-group row"> <!-- Date -->
            <label for="name" class="col-3 col-form-label">Date</label>
            <input v-model="form.date" type="date" class="col-9 form-control" id="date">
          </div>
          <!-- <div class="form-group row">  Statut 
            <label for="name" class="col-3 col-form-label">Statut</label>
            <input v-model="form.status" type="text" class="col-9 form-control" id="status">
          </div> -->
          <div class="form-group row"> <!-- Utilisateur -->
            <label for="name" class="col-3 col-form-label">Utilisateur</label>
            <select v-model="form.user">
              <option v-for="user in users" v-bind:key="user.id" v-bind:value="user.id">{{user.name}}</option>
            </select>
          </div>
          <div class="form-group row">
            <button type="submit" @click.stop.prevent="submit" :to="{ name: 'pointings-table'}" class="btn btn-outline-success"><i class="far fa-save"></i> Enregistrer</button>
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
        title: 'Nouveau Pointage',
        duration: null,
        date: null,
        status: '1',
        user: null

      },
      rules: {
        required: value => !!value || 'Required.'
      }
    }
  },
  computed: { // Au moment ou la page à finie de charger
    users () {
      return this.$store.getters['user/items']
    }
  },

  mounted () { // Lorsque le HTML est interpreté
    this.$store.dispatch('user/fetchUsers')
    if (this.pointing) {
      this.form.title = this.pointing[0]['title']
      this.form.duration = this.pointing[0]['duration']
      this.form.date = this.pointing[0]['date']
      this.form.status = this.pointing[0]['status']
      this.form.user = this.pointing[0]['user']['id']
    }
  },

  methods: {
    onSelect: function (element) {
      this.selectedElements = element
    },

    filter: function (id) {
      this.elementLabel = ''
      this.$set(this.form, 'duration', '')
    },

    submit: function () {
      this.$store.dispatch('pointing/createPointing', {data: this.form}).then((res) => {
        if (!res.data.error) {
          this.$router.push('table')
        }
      })
    }
  }
}
</script>
