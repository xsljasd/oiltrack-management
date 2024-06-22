<!--
 * @Author: jiangjianhao1997@163.com
 * @Date: 2024-03-21 01:03:00
 * @LastEditors: adolf Jiang jiangjianhao1997@163.com
 * @LastEditTime: 2024-05-11 18:14:28
 * @FilePath: /oiltrack-management/src/pages/logon/index.vue
 * @Description:
 * Copyright (c) 2024 by mxj, All Rights Reserved.
-->
<script setup lang="ts">
import { md5 } from 'js-md5'
import router from '@/router'
import { postRegister } from '@/api'
import { handleApiSuccessNotExcept } from '@/utils/apiErrorHandler'

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

/**
 cancel validator rule
const regUsername = /^[a-zA-Z]{3,10}$/
const USERNAME_RULE = [
  {
    require: true,
    message: '内容不能为空！',
  },
  {
    pattern: regUsername,
    message: '请输入正确内容',
  },
]
const regPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,12}$/
const PASSWORD_RULE = [
  {
    require: true,
    message: '内容不能为空！',
  },
  {
    pattern: regPassword,
    message: '请输入正确内容',
  },
]
 */
function validator(value, rule) {
  if (typeof rule === 'function')
    return rule(value)
  return value === LogonData.userPwd
}
const CONFIRM_PASSWORD_RULE = [
  {
    require: true,
    message: '内容不能为空！',
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
    message: '内容不能为空！',
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
    UserPwd: md5(LogonData.userPwd),
    code: LogonData.code,
    state: LogonData.status,
    PhoneNum: LogonData.phoneNum,
  }).then((res) => {
    // @ts-expect-error response type error
    if (res.Status === 0) {
      sessionStorage.setItem('token', res.toString())
      router.push('/')
    }
    // @ts-expect-error response type error
    else if (res.Status === 2) {
      router.push('/login')
    }
    else {
      handleApiSuccessNotExcept(res)
      console.error(res)
    }
  })
  return null
}
</script>

<template>
  <van-form mt-12vw flex flex-col items-end @submit="submit">
    <van-field v-model="LogonData.userCode" label="用户名" placeholder="用户名" />
    <van-field v-model="LogonData.userPwd" type="password" label="密码" placeholder="密码" />
    <van-field v-model="LogonData.confirmPwd" type="password" label="确认密码" placeholder="确认密码" :rules="CONFIRM_PASSWORD_RULE" />
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
