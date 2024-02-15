import "@/assets/base.css"
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ECharts from 'vue-echarts'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.component('v-chart', ECharts)

app.mount('#app')
