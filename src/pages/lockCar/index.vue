<script setup lang="js">
definePage({
  name: 'lockCar',
  meta: {
    level: 2,
    title: '远程施封',
  },
})
const isEmptyLogInfo = computed(() => {
  return true
})
</script>

<template>
  <div class="">
    <div card mt-10vw>
      <VanCell title="车牌号码:">
        浙A 88888
      </VanCell>
      <VanCell title="车仓号:">
        全部<VanIcon name="arrow" />
      </VanCell>
    </div>
    <div card>
      <VanCell>
        <template #title>
          锁状态信息
        </template>
        <template #value>
          <VanIcon name="replay" />
          刷新
        </template>
      </VanCell>
      <div class="c-#999">
        2023-10-14 09:40:30
      </div>
      <template v-for="item in [1, 2, 3, 4, 5, 6]" :key="item">
        <div>
          <span class="c-#666">{{ item }}号锁已打开</span>
          <span class="c-#F33">{{ item }}号扳手到位</span>
        </div>
      </template>
    </div>
    <div card>
      <VanCell>
        <template #title>
          设备日志
        </template>
        <template #value>
          <VanIcon name="replay" />
          刷新
        </template>
      </VanCell>
      <div v-if="isEmptyLogInfo">
        半小时内暂无设备日志信息！
      </div>
    </div>
    <div card>
      <VanCell>
        <template #title>
          执行原因
        </template>
        <template #value>
          <VanIcon name="replay" />
          刷新
        </template>
      </VanCell>
      <VanField autosize row="5" type="textarea" placeholder="请输入执行原因" />
    </div>
    <div class="pos-fixed bottom-0 w-100% p-4rem">
      <VanButton class="w-[90%]! bg-[#09f]!">
        Lock
      </VanButton>
    </div>
  </div>
</template>

<style scoped>

</style>
