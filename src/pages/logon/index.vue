<!--
 * @Author: jiangjianhao1997@163.com
 * @Date: 2024-03-21 01:03:00
 * @LastEditors: adolf Jiang jiangjianhao1997@163.com
 * @LastEditTime: 2024-03-21 01:55:39
 * @FilePath: /oiltrack-management/src/pages/logon/index.vue
 * @Description:
 * Copyright (c) 2024 by mxj, All Rights Reserved.
-->
<script setup lang="ts">
definePage({
  name: 'logon',
  meta: {
    level: 1,
    title: 'logon',
    requireAuth: false,
  },
})

const LogonData = reactive({
  username: '',
  password: '',
})
const regUsername = /^[a-zA-Z]{3,10}$/
const USERNAME_RULE = [
  {
    require: true,
    message: '请输入正确内容',
  },
  {
    pattern: regUsername,
    message: '请输入正确内容',
  },
]
const regPassword = /^[\w\d]{8,12}$/
const PASSWORD_RULE = [
  {
    require: true,
    message: '请输入正确内容',
  },
  {
    pattern: regPassword,
    message: '请输入正确内容',
  },
]

// TODO api connect
function submit() {
  return null
}
</script>

<template>
  <van-form mt-12vw flex flex-col items-end @submit="submit">
    <van-field v-model="LogonData.username" label="用户名" placeholder="用户名长度为3到10位" :rules="USERNAME_RULE" validate-trigger="onSubmit" />
    <van-field v-model="LogonData.password" type="password" label="密码" placeholder="密码长度为8到12位" :rules="PASSWORD_RULE" />
    <van-field v-model="LogonData.password" type="password" label="确认密码" placeholder="密码长度为8到12位" :rules="PASSWORD_RULE" />
    <footer mt-12vw flex flex-row-reverse>
      <van-button type="primary" round block native-type="submit">
        logon
      </van-button>
      <button mr-5vw>
        cancel
      </button>
    </footer>
  </van-form>
</template>
