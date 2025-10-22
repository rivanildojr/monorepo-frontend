import './styles.scss';

import { createApp } from 'vue';

import { registerPlugins } from '@/cliente/plugins';

import App from './app/App.vue';

const app = createApp(App);

registerPlugins(app);

app.mount('#root');
