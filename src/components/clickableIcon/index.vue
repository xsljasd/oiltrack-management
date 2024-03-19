<!--
 * @Author: jiangjianhao1997@163.com
 * @Date: 2024-03-14 16:15:55
 * @LastEditors: adolf Jiang jiangjianhao1997@163.com
 * @LastEditTime: 2024-03-19 16:54:27
 * @FilePath: /oiltrack-management/src/components/clickableIcon/index.vue
 * @Description:
 * Copyright (c) 2024 by mxj, All Rights Reserved.
-->
<script setup lang="ts">
import { Icon } from 'vant'
import navLayoutStore from '@/stores/modules/navLayout'

type pageStates = 'home' | 'vehicleMonitor' | 'vehicleAuthorization' | 'personalCenter'
const props = defineProps<{
  initIcon: string
  clickIcon: string
  navTitle: pageStates
}>()

const store = navLayoutStore()

const isTarget = ref(props.navTitle === store.pageCurrentState)
watch(() => store.pageCurrentState, () => {
  isTarget.value = props.navTitle === store.pageCurrentState
})
</script>

<template>
  <button class="clickable-icon" :class="{ touch: isTarget }" border-none bg-transparent>
    <Icon v-if="!isTarget" :name="props.initIcon" size="3em" />
    <Icon v-else :name="props.clickIcon" size="3em" />
  </button>
</template>

<style scoped lang="less">
.clickable-icon {
  cursor: pointer;
}
</style>
