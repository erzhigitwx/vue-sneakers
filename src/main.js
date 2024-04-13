import {createApp} from 'vue'
import './style.css'
import App from './App.vue'
import {router} from "./config/route.js";

const app = createApp(App);
app.use(router).mount('#app')
