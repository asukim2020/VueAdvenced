import Vue from 'vue'
import VueRouter from 'vue-router'
import UserView from '../views/UserView.vue'
import ItemView from '../views/ItemView.vue'
import createListView from '../views/CreateListView'
import bus from '../utils/bus.js';
import { store } from '../store/index.js';

Vue.use(VueRouter);

export const router = new VueRouter({
  // mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/news',
    },
    {
      path: '/news',
      name: 'news',
      component: createListView('NewsView'),
      beforeEnter(routeTo, routeFrom, next) {
        bus.$emit('start:spinner')
        store.dispatch('FETCH_LIST', routeTo.name)
          .then(() => next())
          .catch((() => new Error('failed to fetch news items')));
      },
    },
    {
      path: '/ask',
      name: 'ask',
      component: createListView('AskView'),
      beforeEnter(routeTo, routeFrom, next) {
        bus.$emit('start:spinner')
        store.dispatch('FETCH_LIST', routeTo.name)
          .then(() => next())
          .catch((() => new Error('failed to fetch news items')));
      },
    },
    {
      path: '/jobs',
      name: 'jobs',
      component: createListView('JobsView'),
      beforeEnter(routeTo, routeFrom, next) {
        bus.$emit('start:spinner')
        store.dispatch('FETCH_LIST', routeTo.name)
          .then(() => next())
          .catch((() => new Error('failed to fetch news items')));
      },
    },
    {
        path: '/user/:id',
        component: UserView
    },
    {
        path: '/item/:id',
        component: ItemView
    },
  ]
});