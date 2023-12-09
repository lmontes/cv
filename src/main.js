import App from './App.vue';
import { createApp } from 'vue';
import { i18n } from "./lang";

import './style.css';
import '@fortawesome/fontawesome-free/css/fontawesome.css';
import '@fortawesome/fontawesome-free/css/solid.css';
import '@fortawesome/fontawesome-free/css/brands.css';

const app = createApp(App);
app.use(i18n)

app.mount('#app')
