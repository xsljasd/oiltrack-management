<!--
 * @Author: jiangjianhao1997@163.com
 * @Date: 2024-03-12 23:32:53
 * @LastEditors: adolf Jiang jiangjianhao1997@163.com
 * @LastEditTime: 2024-03-21 01:54:17
 * @FilePath: /oiltrack-management/src/pages/login/index.vue
 * @Description: login and logon page
 * Copyright (c) 2024 by mxj, All Rights Reserved.
-->
<script setup lang="ts">
definePage({
  name: 'login',
  meta: {
    level: 1,
    title: 'login',
    requireAuth: false,
  },
})

const LogonData = reactive({
  username: '',
  password: '',
})

// TODO api connect
function submit() {
  return null
}
</script>

<template>
  <van-form mt-12vw flex flex-col items-end @submit="submit">
    <van-field v-model="LogonData.username" label="用户名" placeholder="用户名长度为3到10位" />
    <van-field v-model="LogonData.password" type="password" label="密码" placeholder="密码长度为8到12位" />
    <footer mt-12vw flex flex-row-reverse>
      <button class="btn" native-type="submit">
        logon
      </button>
      <button mr-5vw>
        cancel
      </button>
      <a href="/logon" mr-5vw>没有账号？点击注册</a>
    </footer>
  </van-form>
</template>
