import Vue from 'vue';

import Loader from '@/components/app/Loader.vue';
import VueMeta from 'vue-meta';
import dateFilter from '@/filters/date.filter';
import currencyFilter from '@/filters/currency.filter';
import localizeFilter from '@/filters/localize.filter';
import Vuelidate from 'vuelidate';
import messagePlugin from '@/utils/message.plugin';
import titlePlugin from '@/utils/title.plugin';
import firebase from 'firebase/app';
import tooltipDirective from '@/directives/tooltip.directive';
import 'firebase/auth';
import 'firebase/database';
import Paginate from 'vuejs-paginate';

import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import 'materialize-css/dist/js/materialize.min';

Vue.config.productionTip = false;

Vue.use(messagePlugin);
Vue.use(titlePlugin);
Vue.use(Vuelidate);
Vue.use(VueMeta);
Vue.filter('date', dateFilter);
Vue.filter('currency', currencyFilter);
Vue.filter('localize', localizeFilter);
Vue.component('Loader', Loader);
Vue.component('Paginate', Paginate);
Vue.directive('tooltip', tooltipDirective);

firebase.initializeApp({
  apiKey: 'AIzaSyCc3zn_EPKJksBtsBDOUwOjfzCtm-HyUho',
  authDomain: 'vue-learning-93b26.firebaseapp.com',
  databaseURL: 'https://vue-learning-93b26.firebaseio.com',
  projectId: 'vue-learning-93b26',
  storageBucket: 'vue-learning-93b26.appspot.com',
  messagingSenderId: '572039913061',
  appId: '1:572039913061:web:551a7118673e9a91e1308c',
});

let app;
firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: (h) => h(App),
    }).$mount('#app');
  }
});
