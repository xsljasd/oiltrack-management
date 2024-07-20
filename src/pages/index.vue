<!--
 * @Author: jiangjianhao1997@163.com
 * @Date: 2024-03-12 16:40:49
 * @LastEditors: adolf Jiang jiangjianhao1997@163.com
 * @LastEditTime: 2024-05-01 13:22:33
 * @FilePath: /oiltrack-management/src/pages/index.vue
 * @Description: the home page
 * Copyright (c) 2024 by mxj, All Rights Reserved.
-->
<script setup lang="ts">
// import useAppStore from '@/stores/modules/app'

definePage({
  name: 'main',
  meta: {
    level: 1,
    title: 'home',
    requireAuth: true,
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
    ListData.List = [
      { plateNumber: 'ABC123', alarmInfo: '油站外试图解封', alarmLevel: 'Level 1' },
      { plateNumber: 'XYZ456', alarmInfo: '异常停车', alarmLevel: 'Level 2' },
      { plateNumber: 'DEF789', alarmInfo: '未施封离开油站', alarmLevel: 'Level 3' },
    ]

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
  <div class="home-container" bg-layout-background bg-contain bg-no-repeat p-16px>
    <section drop-shadow="[0.4rem 0 1.2rem rgba(204,204,204,0.30)]" mb-2vw mt-32vw h-29.34vw flex rd-2rem bg-layout-navcolor>
      <scroll-snap />
    </section>
    <section class="scroll-list" drop-shadow="[0.4rem 0 1.2rem rgba(204,204,204,0.30)]" rd-2rem title="new warning notices">
      <VanList
        v-model:loading="ListData.loading"
      >
        <div class="list-header" h-44 w-full flex items-center justify-around>
          <span>报警车辆</span><span>报警级别</span><span>报警类型</span>
        </div>
        <VanCell v-for="item in ListData.List" :key="item">
          <template #title>
            <div class="list-item">
              <span class="plate-number">{{ item.plateNumber }}</span>
              <span class="alarm-level">{{ item.alarmLevel }}</span>
              <span class="alarm-info">{{ item.alarmInfo }}</span>
            </div>
          </template>
        </VanCell>
      </VanList>
    </section>
  </div>
</template>

<style scoped lang="less">
.home-container {
  background-image: url('~/img/HomeBackground.png');
  height: calc(100vh - 46px);
  .scroll-list {
    height: calc(100% - 42vw - 29.34vw);
    margin-bottom: 5vw;
    overflow-y: scroll;
    .list-header {
      background-color: rgba(226, 242, 255, 1);
      color: rgba(0, 153, 255, 1);
    }
  }
  .list-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 4px 8px;
    font-size: 12px;
    .plate-number {
      flex: 0 1 auto;
      margin-right: auto;
    }

    .alarm-info {
      flex: 0 1 auto;
      margin-left: auto;
    }

    .alarm-level {
      text-align: center;
      flex: 1 1 auto;
    }
}

}
</style>

<route lang="yaml">
  meta:
    layout: home
</route>
