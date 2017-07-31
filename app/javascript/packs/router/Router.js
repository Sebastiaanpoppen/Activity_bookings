import Vue from 'vue';
import Router from 'vue-router';
import ActivitiesIndex   from './../components/activities/Index.vue';

Vue.use(Router);
// import MessagesShow    from './../components/Messages/Show';
// import MessagesCreate  from './../components/Messages/Create';
// import MessagesUpdate  from './../components/Messages/Update';

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: ActivitiesIndex
    },
    // {
    //   path: '/messages',
    //   name: 'Messages',
    //   component: MessagesIndex
    // },
    // {
    //   path: '/messages/create',
    //   name: 'MessagesCreate',
    //   component: MessagesCreate
    // },
    // {
    //   path: '/messages/:id',
    //   name: 'MessagesShow',
    //   component: MessagesShow
    // },
    // {
    //   path: '/messages/:id/edit',
    //   name: 'MessagesUpdate',
    //   component: MessagesUpdate
    // },
  ],
});
