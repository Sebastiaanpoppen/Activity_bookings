import Vue from 'vue'
import VueRouter from 'vue-router';
import ParentDashboard from './../components/Parent/Dashboard';
// import ActivitiesShow from './../components/Activities/Show';
// import ActivitiesCreate from './../components/Activities/Create';
// import ActivitiesUpdate from './../components/Activities/Update';
import UserActivitiesIndex from './../components/Parent/Activities/Index';
import UserActivitiesShow from './../components/Parent/Activities/Show';
import UserBookingsIndex from './../components/Parent/Bookings/Index';
import UserBookingsShow from './../components/Parent/Bookings/Show';
// import UserBookingsCreate from './../components/Parents/Bookings/Create';
// import UserBookingsUpdate from './../components/Parents/Bookings/Update';
import UserInvoicesIndex from './../components/Parent/Invoices/Index';
import UserInvoicesShow from './../components/Parent/Invoices/Show';

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: ParentDashboard,
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
