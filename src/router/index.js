import Vue from 'vue'
import Router from 'vue-router'
import TicketList from '@/components/tickets/List'
import TicketCard from '@/components/tickets/Card'

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
    }
  ]
})

router.push({ name: 'tickets-list' })

export default router
