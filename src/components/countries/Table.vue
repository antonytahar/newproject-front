<template>
  <div>
    <router-link class="btn btn-success faa-parent animated-hover" :to="{ name: 'cities-table'}">
      <i class="fas fa-eye"></i> Consulter les villes
    </router-link>
    <router-link class="btn btn-success faa-parent animated-hover" :to="{ name: 'countries-create'}">
      <i class="fas fa-plus-circle"></i> Nouveau pays
    </router-link>
    <router-link class="btn btn-success faa-parent animated-hover" :to="{ name: 'pointings-table'}">
      <i class="fas fa-eye"></i> Accéder au projet pointages
    </router-link>
    <v-client-table :data="testData" :columns="columns" :options="options">
      <template slot="country" slot-scope="props">
        {{props.row.country.name}}
      </template>
      <template slot="Details" slot-scope="props">
        <router-link class="btn btn-primary faa-parent animated-hover" :to="{ name: 'countries-card', params: {countryid: props.row['id']}}">
          <i class="far fa-eye faa-flash"></i> Fiche
        </router-link>
        <button class="btn btn-danger faa-parent animated-hover" @click="deleteOnClick(props.row['id'])">
          <i class="fas fa-trash-alt"></i> Supprimer
        </button>
      </template>
    </v-client-table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      columns: ['id', 'name', 'Details'],
      options: {
        headings: {'id': 'ID', 'name': 'Nom', Details: 'Details'},
        skin: 'table-striped table-condensed table-hover',
        filterable: true,
        sortIcon: { base: 'fa', up: 'fa-sort-asc', down: 'fa-sort-desc', is: 'fa-sort' },
        // fa -> Font Awesome 5 : Librairie d'icônes gratuites
        texts: {
          count: 'Affichage de {from} à {to} sur {count}',
          filter: 'Filtrer résultats :   ',
          filterPlaceholder: 'Tapez votre recherche...',
          limit: 'Par page :',
          noResults: 'Aucun résultat',
          page: 'Page:',
          loading: 'Chargement...',
          defaultOption: 'Select {column}'
        }
      }
    }
  },

  mounted () {
    this.$store.dispatch('country/fetchCountries')
  },

  computed: {
    testData () {
      return this.$store.getters['country/items']
    }
  },

  methods: {
    deleteOnClick (countryid) {
      this.$store.dispatch('country/deleteCountry', countryid).then((res) => {
        if (!res.data.error) {
          this.$router.push('table')
        }
      })
    }
  }
}

</script>
