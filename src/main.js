import Vue from 'vue';
import App from './App.vue';
import router from './router';
import './styles.scss';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faAt, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import {} from '@fortawesome/free-regular-svg-icons';
import {
  faTwitter,
  faInstagram,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faAt, faTwitter, faInstagram, faGithub, faExternalLinkAlt);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
