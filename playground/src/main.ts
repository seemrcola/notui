import { createApp } from 'vue'
import './style.css'
import '@notui/components/dist/style.css'
import 'uno.css'
import { NoAdsorb, NoIcon, NoMoveable, NoTiresomeTag } from '@notui/components'
import { ElButton } from 'element-plus'
import { OButton } from 'onu-ui'
import App from './App.vue'

const app = createApp(App)
// 使用use不会出类型报错，直接在app.vue中使用会报错
app.use(ElButton)
app.use(OButton)
app.use(NoIcon)
app.use(NoMoveable)
app.use(NoTiresomeTag)
app.use(NoAdsorb)

app.mount('#playground')
