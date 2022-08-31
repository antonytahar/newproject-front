<template>
  <div>
    <router-link class="btn btn-success faa-parent animated-hover" :to="{ name: 'cities-table'}">
      <i class="fas fa-eye"></i> Retourner au projet world
    </router-link>
    <router-link class="btn btn-success faa-parent animated-hover" :to="{ name: 'pointings-create'}">
      <i class="fas fa-plus-circle"></i> Nouveau pointage
    </router-link>
    <v-client-table :data="testData" :columns="columns" :options="options">
      <template slot="pointing" slot-scope="props">
        {{props.row.pointing.name}}
      </template>
      <template slot="Details" slot-scope="props">
        <!-- <router-link class="btn btn-primary faa-parent animated-hover" :to="{ name: 'pointings-card', params: {pointingid: props.row['id']}}">
          <i class="far fa-eye faa-flash"></i> Fiche
        </router-link> -->
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
      columns: ['id', 'title', 'duration', 'date', 'status', 'user_id', 'Details'],
      options: {
        headings: {'id': 'ID', 'title': 'Titre', 'duration': 'Durée', 'date': 'Date', 'status': 'Statut', 'user_id': 'Utilisateur', Details: 'Details'},
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
    this.$store.dispatch('pointing/fetchPointings')
  },

  computed: {
    testData () {
      return this.$store.getters['pointing/items']
    }
  },

  methods: {
    deleteOnClick (pointingid) {
      // this.$store.dispatch('pointing/deletePointing', pointingid).then((res) => {
      //   if (!res.data.error) {
      //     this.$router.push('table')
      //   }
      // })
    }
  }
}

</script>
