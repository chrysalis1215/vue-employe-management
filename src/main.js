import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import routes from './router.js'
import App from './App.vue'


const app = createApp(App);
app.use(ElementPlus)
app.use(routes)
app.mount('#app')
