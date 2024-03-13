<!--
 * @Author: jiangjianhao1997@163.com
 * @Date: 2024-03-12 16:40:49
 * @LastEditors: adolf Jiang jiangjianhao1997@163.com
 * @LastEditTime: 2024-03-13 00:20:01
 * @FilePath: /oiltrack-management/src/pages/index.vue
 * @Description: the home page
 * Copyright (c) 2024 by mxj, All Rights Reserved.
-->
<script setup lang="ts">
import { Button, Loading } from 'vant'

// import useAppStore from '@/stores/modules/app'

definePage({
  name: 'main',
  meta: {
    level: 1,
  },
})

// const appStore = useAppStore()
const checked = ref<boolean>(isDark.value)

watch(
  () => isDark.value,
  (newMode) => {
    checked.value = newMode
  },
  { immediate: true },
)

// function toggle() {
//   toggleDark()
//   appStore.swithMode(isDark.value ? 'dark' : 'light')
// }

const ListData = reactive({
  List: [],
  loading: true,
  finished: false,
})

function onLoad() {
  // 异步更新数据
  // setTimeout 仅做示例，真实场景中一般为 ajax 请求
  setTimeout(() => {
    for (let i = 0; i < 10; i++)
      ListData.List.push(ListData.List.length + 1)

    // 加载状态结束
    ListData.loading = false

    // 数据全部加载完成
    if (ListData.List.length >= 40)
      ListData.finished = true
  }, 1000)
}
onMounted(() => {
  onLoad()
})
</script>

<template>
  <div class="home-container" h-100vh bg-layout-background bg-contain bg-no-repeat p-15vw>
    <section drop-shadow="[0.4rem 0 1.2rem rgba(204,204,204,0.30)]" mb-5vw mt-32vw h-29.34vw flex rd-2rem bg-layout-navcolor>
      ICON
      <Button to="log_on">
        logon
      </Button>
    </section>
    <section drop-shadow="[0.4rem 0 1.2rem rgba(204,204,204,0.30)]" rd-2rem title="new warning notices">
      <div v-if="!ListData.loading">
        <VanCell v-for="item in ListData.List" :key="item" :title="item" />
      </div>
      <div v-else>
        <Loading />
      </div>
    </section>
  </div>
</template>

<style scoped lang="less">
.home-container {
  background-image: url('~/img/HomeBackground.png');
}
</style>

<route lang="yaml">
  meta:
    layout: home
</route>
