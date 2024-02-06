import { createApp } from 'vue'
import App from './App.vue'
import router from './router/initRouter'

const API_HOSTNAME = 'localhost'
const API_HOSTNAME_PORT = '8080'
const API_HOSTNAME_URL = `http:/${API_HOSTNAME}:${API_HOSTNAME}/`
export default API_HOSTNAME_URL

const app = createApp(App)
app.use(router)
app.mount('#app')


app.config.errorHandler = (err, instance, info) => {
    // report error to tracking services
}