<!--
 * @Author: jiangjianhao1997@163.com
 * @Date: 2024-03-12 23:32:53
 * @LastEditors: adolf Jiang jiangjianhao1997@163.com
 * @LastEditTime: 2024-04-09 22:36:23
 * @FilePath: /oiltrack-management/src/pages/login/index.vue
 * @Description: login and logon page
 * Copyright (c) 2024 by mxj, All Rights Reserved.
-->
<script setup lang="ts">
import { postLogin } from '@/api'
import router from '@/router'

definePage({
  name: 'login',
  meta: {
    level: 1,
    title: 'login',
    requireAuth: false,
  },
})

const route = useRoute()
const LoginData = reactive({
  code: '',
  status: '',
  userCode: '',
  userPwd: '',
})
onMounted(() => {
  const urlQuery = route.query
  LoginData.code = urlQuery?.code?.toString() ?? ''
  LoginData.status = urlQuery?.status?.toString() ?? ''
  if (LoginData.code && LoginData.status) {
    localStorage.setItem('author-code', LoginData.code)
    localStorage.setItem('author-status', LoginData.status)
  }
  else {
    LoginData.code = localStorage.getItem('author-code')
    LoginData.status = localStorage.getItem('author-status')
  }
})

// TODO api connect
function submit() {
  postLogin({
    UserCode: LoginData.userCode,
    UserPwd: LoginData.userPwd,
    code: LoginData.code,
    state: LoginData.status,
  }).then((res) => {
    // @ts-expect-error response type error
    if (res.Status === 0) {
      sessionStorage.setItem('token', res.toString())
      router.push('/')
    }
    else {
      console.error(res)
    }
  })
  return null
}
</script>

<template>
  <van-form mt-12vw flex flex-col items-end @submit="submit">
    <van-field v-model="LoginData.userCode" label="用户名" placeholder="用户名长度为3到10位" />
    <van-field v-model="LoginData.userPwd" type="password" label="密码" placeholder="密码长度为8到12位" />
    <footer mt-12vw flex flex-row-reverse>
      <button class="btn" native-type="submit">
        登陆
      </button>
      <button mr-5vw>
        取消
      </button>
      <a href="/logon" mr-5vw whitespace-nowrap font-size-12px>没有账号？点击注册</a>
    </footer>
  </van-form>
</template>
