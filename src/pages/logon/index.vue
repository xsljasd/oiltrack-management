<!--
 * @Author: jiangjianhao1997@163.com
 * @Date: 2024-03-21 01:03:00
 * @LastEditors: adolf Jiang jiangjianhao1997@163.com
 * @LastEditTime: 2024-05-01 12:56:04
 * @FilePath: /oiltrack-management/src/pages/logon/index.vue
 * @Description:
 * Copyright (c) 2024 by mxj, All Rights Reserved.
-->
<script setup lang="ts">
import { postRegister } from '@/api'
import router from '@/router'

definePage({
  name: 'logon',
  meta: {
    level: 1,
    title: 'logon',
    requireAuth: false,
  },
})

const LogonData = reactive({
  userCode: '',
  userPwd: '',
  confirmPwd: '',
  phoneNum: '',
  code: '',
  status: '',
})

const route = useRoute()
onMounted(() => {
  const urlQuery = route.query
  LogonData.code = urlQuery?.code?.toString() ?? ''
  LogonData.status = urlQuery?.status?.toString() ?? ''
  // if (!LogonData.code || !LogonData.status)
  //   router.push('/placeholder')
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
function validator(value, rule) {
  if (typeof rule === 'function')
    return rule(value)
  return value === LogonData.userPwd
}
const CONFIRM_PASSWORD_RULE = [
  {
    require: true,
    message: '请输入正确内容',
  },
  {
    validator,
    message: '两次输入的密码不一致',
  },
]
const regPhone = /^1[3-9]\d{9}$/
const Phone_RULE = [
  {
    require: true,
    message: '请输入正确内容',
  },
  {
    pattern: regPhone,
    message: '请输入正确内容',
  },
]

// TODO api connect
function submit() {
  postRegister({
    UserCode: LogonData.userCode,
    UserPwd: LogonData.userPwd,
    code: LogonData.code,
    state: LogonData.status,
    PhoneNum: LogonData.phoneNum,
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
    <van-field v-model="LogonData.userCode" label="用户名" placeholder="用户名长度为3到10位" :rules="USERNAME_RULE" validate-trigger="onSubmit" />
    <van-field v-model="LogonData.userPwd" type="password" label="密码" placeholder="密码长度为8到12位" :rules="PASSWORD_RULE" />
    <van-field v-model="LogonData.confirmPwd" type="password" label="确认密码" placeholder="密码长度为8到12位" :rules="CONFIRM_PASSWORD_RULE" />
    <van-field v-model="LogonData.phoneNum" label="电话号码" placeholder="请输入您的电话号码" :rules="Phone_RULE" />
    <footer mt-12vw flex flex-row-reverse items-center>
      <van-button type="primary" round block native-type="submit">
        注册
      </van-button>
      <a href="/login" class="goto-login" mr-5vw>已有账号？点击登陆</a>
    </footer>
  </van-form>
</template>

<style scoped lang="less">
a.goto-login {
  font: 10px sans-serif;
  white-space: nowrap;
}
</style>
