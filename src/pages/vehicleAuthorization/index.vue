<script setup lang="ts">
import Unlock from '~/icon/unLock.png'
import Lock from '~/icon/Lock.png'

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

const checked = ref()
const router = useRouter()
function handleLock() {
  log.info(checked.value)
  router.push('/lockCar')
}
function handleUnlock() {
  log.info(checked.value)
  router.push('/unlockCar')
}
</script>

<template>
  <div>
    <VanList
      v-model:loading="ListData.loading"
      pos-relative
      overflow-scroll
    >
      <div class="list-header" pos-sticky top-0 h-44 w-full flex items-center justify-around>
        <span class="columns-items-4">select</span>
        <span class="columns-items-4">车队</span><span columns-items-4>车牌号</span><span columns-items-4>是否授权</span>
      </div>

      <VanRadioGroup v-model="checked" shape="dot">
        <VanCell v-for="(item, index) in ListData.List" :key="item">
          <div class="list-item" flex items-center justify-around>
            <VanRadio :name="index" columns-items-6 />
            <span class="alarm-level columns-items-4">{{ item.carTeam }}</span>
            <span class="plate-number columns-items-4">{{ item.plateNumber }}</span>
            <span class="alarm-info columns-items-4">{{ item.hasAuth }}</span>
          </div>
        </VanCell>
      </VanRadioGroup>
    </VanList>
    <div class="float-container" pos-fixed right-8 flex flex-col overflow-hidden border-rd-12>
      <div class="bg-#FD5757 p-8" @click="handleLock">
        <VanIcon :name="Lock" size="32" />
      </div>
      <div class="bg-#4DCF63 p-8" @click="handleUnlock">
        <VanIcon :name="Unlock" size="32" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.float-container {
  bottom: calc(6vw + 5em)
}
</style>

<route lang="yaml">
  meta:
    layout: home
</route>
