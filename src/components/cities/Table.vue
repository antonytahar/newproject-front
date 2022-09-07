<template>
  <div>
    <router-link class="btn btn-success faa-parent animated-hover" :to="{ name: 'countries-table'}">
      <i class="fas fa-eye"></i> Consulter les pays
    </router-link>
    <router-link class="btn btn-success faa-parent animated-hover" :to="{ name: 'cities-create'}">
      <i class="fas fa-plus-circle"></i> Nouvelle ville
    </router-link>
    <router-link class="btn btn-success faa-parent animated-hover" :to="{ name: 'pointings-table'}">
      <i class="fas fa-eye"></i> Accéder au projet pointages
    </router-link>
    <v-client-table :data="testData" :columns="columns" :options="options">
      <template slot="country" slot-scope="props"> <!-- On nomme ici la donnée que l'on veut afficher dans la table " data.city.country.name prendra le nom de 'country' "-->
        {{props.row.country.name}} <!-- On indique ici la donnée que l'on veut afficher dans la table : "Je veux afficher le data.city.country.name" -->
      </template>
      <template slot="Details" slot-scope="props">
        <router-link class="btn btn-primary faa-parent animated-hover" :to="{ name: 'cities-card', params: {cityid: props.row['id']}}">
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
      columns: ['id', 'post_code', 'name', 'latitude', 'longitude', 'country', 'Details'],
      options: {
        headings: {'id': 'ID', 'post_code': 'Code postal', 'name': 'Nom', 'latitude': 'Latitude', 'longitude': 'Longitude', 'country': 'Pays', Details: 'Details'},
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
    this.$store.dispatch('city/fetchCities')
  },

  computed: {
    testData () {
      return this.$store.getters['city/items']
    }
  },

  methods: {
    deleteOnClick (cityid) {
      this.$store.dispatch('city/deleteCity', cityid).then((res) => {
        if (!res.data.error) {
          this.$router.push('table')
        }
      })
    }
  }
}

</script>
