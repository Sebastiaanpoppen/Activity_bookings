import Vue from 'vue';
import Router from 'vue-router';
import Dashboard from './../components/Dashboard';
// import ActivitiesShow from './../components/Activities/Show';
// import ActivitiesCreate from './../components/Activities/Create';
// import ActivitiesUpdate from './../components/Activities/Update';
import UserActivitiesIndex from './../components/Parents/Activities/Index';
import UserActivitiesShow from './../components/Parents/Activities/Show';
import UserBookingsIndex from './../components/Parents/Bookings/Index';
import UserBookingsShow from './../components/Parents/Bookings/Show';
// import UserBookingsCreate from './../components/Parents/Bookings/Create';
// import UserBookingsUpdate from './../components/Parents/Bookings/Update';
import UserInvoicesIndex from './../components/Parents/Invoices/Index';
import UserInvoicesShow from './../components/Parents/Invoices/Show';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard,
    },
    {
      path: '/activities',
      name: 'Activities',
      component: UserActivitiesIndex,
    },
    {
      path: '/activities/show',
      name: 'ActivitiesShow',
      component: UserActivitiesShow,
    },
    {
      path: '/boekingen',
      name: 'Bookings',
      component: UserBookingsIndex,
    },
    {
      path: '/boekingen/show',
      name: 'BookingsShow',
      component: UserBookingsShow,
    },
    {
      path: '/facturen',
      name: 'Invoices',
      component: UserInvoicesIndex,
    },
    {
      path: '/facturen/show',
      name: 'FacturenShow',
      component: UserInvoicesShow,
    },
  ],
});
