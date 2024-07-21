<script setup lang="ts">
definePage({
  name: 'vehicleAuthorization',
  meta: {
    level: 2,
    title: '车辆授权',
  },
})
const ListData = reactive({
  List: [],
  loading: true,
  finished: false,
})
function onLoad() {
  // 异步更新数据
  // setTimeout 仅做示例，真实场景中一般为 ajax 请求
  setTimeout(() => {
    const ListArray = [
      { plateNumber: 'ABC123', hasAuth: 'Y', carTeam: 'Team 1' },
      { plateNumber: 'XYZ456', hasAuth: 'Y', carTeam: 'Team 2' },
      { plateNumber: 'DEF789', hasAuth: 'N', carTeam: 'Team 3' },
    ]

    while (ListData.List.length < 40)
      ListData.List.push(...ListArray)

    // for (let i = 0; i < 5; i++) {
    //   ListData.List.push(...ListArray)
    //   log.info(ListData.List)
    //   log.info(ListData.List.length)
    // }

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
  <div>
    <VanList
      v-model:loading="ListData.loading"
      pos-relative
      overflow-scroll
    >
      <div class="list-header" pos-sticky top-0 h-44 w-full flex items-center justify-around>
        <span class="columns-items-3">车队</span><span columns-items-3>车牌号</span><span columns-items-3>是否授权</span>
      </div>
      <VanCell v-for="item in ListData.List" :key="item">
        <div class="list-item" flex items-center justify-around>
          <span class="alarm-level columns-items-3">{{ item.carTeam }}</span>
          <span class="plate-number columns-items-3">{{ item.plateNumber }}</span>
          <span class="alarm-info columns-items-3">{{ item.hasAuth }}</span>
        </div>
      </VanCell>
    </VanList>
  </div>
</template>

<route lang="yaml">
  meta:
    layout: home
</route>
