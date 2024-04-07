/*
 * @Author: jiangjianhao1997@163.com
 * @Date: 2024-03-08 14:20:17
 * @LastEditors: adolf Jiang jiangjianhao1997@163.com
 * @LastEditTime: 2024-04-07 13:45:47
 * @FilePath: /oiltrack-management/src/main.ts
 * @Description:
 * Copyright (c) 2024 by mxj, All Rights Reserved.
 */
import { createApp } from 'vue'
import { createHead } from '@unhead/vue'
import App from '@/App.vue'
import router from '@/router'
import pinia from '@/stores'
import 'virtual:uno.css'
import '@/styles/app.less'

// Vant 桌面端适配
import '@vant/touch-emulator'

/* --------------------------------
Vant 中有个别组件是以函数的形式提供的，
包括 Toast，Dialog，Notify 和 ImagePreview 组件。
在使用函数组件时，unplugin-vue-components
无法自动引入对应的样式，因此需要手动引入样式。
------------------------------------- */
import 'vant/es/toast/style'
import 'vant/es/dialog/style'
import 'vant/es/notify/style'
import 'vant/es/image-preview/style'

const app = createApp(App)
const head = createHead()

const APP_ID = import.meta.env.VITE_WEIXIN_APP_ID
// eslint-disable-next-line node/prefer-global/process
const REDIRECT_URL = process.env.NODE_ENV === 'development' ? 'http%3A%2F%2F192.168.3.10%3A3000' : 'http%3A%2F%2Fdotou.do-tou.com'
// redirect to login page
router.beforeEach((to, _from, next) => {
  if (to.meta.requireAuth) {
    if (sessionStorage.getItem('token'))
      next()
    else if (Object.keys(to.query).includes('code'))
      next('/logon')
    else
      window.location.href = (`https://open.weixin.qq.com/connect/oauth2/authorize?appid=${APP_ID}&redirect_uri=${REDIRECT_URL}&response_type=code&scope=snsapi_userinfo&state=#wechat_redirect`)
  }
  else {
    next()
  }
})
app.use(head)
app.use(router)
app.use(pinia)

app.mount('#app')
