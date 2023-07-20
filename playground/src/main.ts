import { createApp } from 'vue'
import './style.css'
import '@notui/components/dist/style.css'
import 'uno.css'
import { NoMoveable } from '@notui/components'
import { ElButton } from 'element-plus'
import App from './App.vue'

const app = createApp(App)
// fixme 使用use不会出类型报错，直接在app.vue中使用会报错！！！！！
app.use(ElButton)
app.use(NoMoveable)
// app.use(NoTiresomeTag)

app.mount('#playground')
