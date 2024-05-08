<!--
 * @Author: jiangjianhao1997@163.com
 * @Date: 2024-04-07 13:29:01
 * @LastEditors: adolf Jiang jiangjianhao1997@163.com
 * @LastEditTime: 2024-04-07 17:03:20
 * @FilePath: /oiltrack-management/src/pages/placeholder/index.vue
 * @Description: placeholder page
 * Copyright (c) 2024 by mxj, All Rights Reserved.
-->
<script setup lang="ts">
definePage({
  name: 'placeholder',
  meta: {
    level: 1,
  },
})
</script>

<template>
  <div class="home-container" h-100vh flex items-center justify-center bg-layout-background bg-contain bg-no-repeat p-15vw>
    <span c-black>手机号绑定成功!</span>
  </div>
</template>

<style scoped lang="less">
.home-container {
  background-image: url('~/img/HomeBackground.png');
}
</style>
