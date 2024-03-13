<!--
 * @Author: jiangjianhao1997@163.com
 * @Date: 2024-03-12 23:32:53
 * @LastEditors: adolf Jiang jiangjianhao1997@163.com
 * @LastEditTime: 2024-03-13 16:32:12
 * @FilePath: /oiltrack-management/src/pages/log_on/index.vue
 * @Description: login and logon page
 * Copyright (c) 2024 by mxj, All Rights Reserved.
-->
<script setup lang="ts">
definePage({
  name: 'logon',
  meta: {
    level: 2,
    title: 'logon',
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
  <div items-endr mt-12vw flex flex-col>
    <van-field v-model="LogonData.username" label="username" />
    <van-field v-model="LogonData.password" type="password" label="password" />
    <footer mt-12vw flex flex-row-reverse>
      <button class="btn" @click="submit">
        logon
      </button>
      <button mr-5vw>
        cancel
      </button>
    </footer>
  </div>
</template>
