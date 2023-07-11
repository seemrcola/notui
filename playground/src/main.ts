import { createApp } from 'vue'
import './style.css'
import '@notui/components/dist/style.css'
import 'uno.css'
import { NoMoveable, NoTiresomeTag } from '@notui/components'
import { ElButton } from 'element-plus'
import App from './App.vue'

const app = createApp(App)
app.use(ElButton)
app.use(NoMoveable)
app.use(NoTiresomeTag)

app.mount('#playground')
