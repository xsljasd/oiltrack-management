<script setup lang="ts">
import Aver from '@/assets/icon/person_avger.png'

definePage({
  name: 'personalCenter',
  meta: {
    level: 2,
    title: '个人中心',
  },
})
</script>

<template>
  <div flex flex-col items-center justify-center>
    <VanIcon :name="Aver" size="80" mt-32 />
    <span>name</span>
    <VanCell title="修改密码" mt-32>
      <VanIcon name="arrow" />
    </VanCell>
    <VanCell title="修改用户名" mb-50vh>
      <VanIcon name="arrow" />
    </VanCell>
    <VanButton w-100vw border-rd-20>
      退出登录
    </VanButton>
  </div>
</template>

<style>

</style>

<route lang="yaml">
  meta:
    layout: home
</route>
