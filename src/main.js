import { createApp } from 'vue'
import './style.css'
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core';
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
/* import specific icons */
import {
  faFacebook, faInstagram, faXTwitter
} from '@fortawesome/free-brands-svg-icons';
import {
  faShareNodes, faArrowLeft, faArrowRight
} from '@fortawesome/free-solid-svg-icons';
/* add icons to the library */
library.add(faFacebook, faInstagram, faXTwitter, faShareNodes, faArrowLeft, faArrowRight);

import App from './App.vue'
const app = createApp(App);
app.component('font-awesome-icon', FontAwesomeIcon);
app.mount('#app');
