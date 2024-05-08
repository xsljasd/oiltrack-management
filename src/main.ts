/*
 * @Author: jiangjianhao1997@163.com
 * @Date: 2024-03-08 14:20:17
 * @LastEditors: adolf Jiang jiangjianhao1997@163.com
 * @LastEditTime: 2024-05-01 12:08:23
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

if (import.meta.env.VITE_USER_NODE_ENV !== 'stage')
  weChat_verify()
app.use(head)
app.use(router)
app.use(pinia)

app.mount('#app')

function weChat_verify() {
  const APP_ID = import.meta.env.VITE_WEIXIN_APP_ID
  const REDIRECT_URL = import.meta.env.MODE === 'development' ? 'http%3A%2F%2F192.168.3.10%3A3000%2Flogon' : 'http%3A%2F%2Fdotou.do-tou.com%2Flogon'

  // redirect to login page
  router.beforeEach((to, _from, next) => {
    const REDIRECT_URL_NOT_INCLUDES_CODE = to.path.includes('logon') && !Object.keys(to.query).includes('code')
    const LOCAL_STORAGE_HAS_CODE = !!localStorage.getItem('author-code')
    if (!REDIRECT_URL_NOT_INCLUDES_CODE) {
      localStorage.setItem('author-code', to.query.code as string)
      localStorage.setItem('author-status', to.query.status as string)
      // TODO add setTimeout expire 5 mins author-code&&author-status
    }
    if (to.meta.requireAuth) {
      console.error('%c [ LOCAL_STORAGE_HAS_CODE ]-64', 'font-size:13px; background:red; color:#bf2c9f;')
      if (sessionStorage.getItem('token'))
        next()
      else
        window.location.href = (`https://open.weixin.qq.com/connect/oauth2/authorize?appid=${APP_ID}&redirect_uri=${REDIRECT_URL}&response_type=code&scope=snsapi_userinfo&state=#wechat_redirect`)
    }
    else {
      console.error('%c [ REDIRECT_URL_NOT_INCLUDES_CODE && !LOCAL_STORAGE_HAS_CODE ]-65', 'font-size:13px; background:pink; color:#bf2c9f;', REDIRECT_URL_NOT_INCLUDES_CODE, LOCAL_STORAGE_HAS_CODE)
      if (!REDIRECT_URL_NOT_INCLUDES_CODE) {
        console.error('%c [ LOCAL_STORAGE_HAS_CODE ]-64', 'font-size:13px; background:blue; color:#bf2c9f;', to, '\n', _from)
        next()
      }
    }
  })
}
