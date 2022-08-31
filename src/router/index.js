import Vue from 'vue'
import Router from 'vue-router'
import TicketList from '@/components/tickets/List'
import TicketCard from '@/components/tickets/Card'
// Begin Cities
import CityTable from '@/components/cities/Table'
import CityCard from '@/components/cities/Card'
import CityForm from '@/components/cities/Form'
// End Cities
// Begin Countries
import CountryTable from '@/components/countries/Table'
import CountryCard from '@/components/countries/Card'
import CountryForm from '@/components/countries/Form'
// End Countries
// Begin Pointings
import PointingTable from '@/components/pointings/Table'
import PointingForm from '@/components/pointings/Form'
// End Pointings
// import store from '@/store'

Vue.use(Router)

var router = new Router({
  routes: [
    {
      path: '/tickets/list',
      name: 'tickets-list',
      component: TicketList
    },
    {
      path: '/tickets/:ticketid',
      name: 'tickets-card',
      component: TicketCard
    },
    // Begin Cities
    {
      path: '/cities/table',
      name: 'cities-table',
      component: CityTable
    },
    {
      path: '/cities/:cityid',
      name: 'cities-card',
      component: CityCard
    },
    {
      path: '/cities/create',
      name: 'cities-create',
      component: CityForm
    },
    {
      path: '/cities/:cityid',
      name: 'cities-delete',
      component: CityTable
    },
    // End Cities
    // Begin Countries
    {
      path: '/countries/table',
      name: 'countries-table',
      component: CountryTable
    },
    {
      path: '/countries/:countryid',
      name: 'countries-card',
      component: CountryCard
    },
    {
      path: '/countries/create',
      name: 'countries-create',
      component: CountryForm
    },
    {
      path: '/countries/:countryid',
      name: 'countries-delete',
      component: CountryTable
    },
    // End Countries
    // Begin Pointings
    {
      path: '/pointings/table',
      name: 'pointings-table',
      component: PointingTable
    },
    {
      path: '/pointings/create',
      name: 'pointings-create',
      component: PointingForm
    }
    // End Pointings
    // Begin Users
  ]
})

router.push({ name: 'cities-table' })

export default router
