<!--
 * @Author: jiangjianhao1997@163.com
 * @Date: 2024-03-23 01:50:28
 * @LastEditors: adolf Jiang jiangjianhao1997@163.com
 * @LastEditTime: 2024-03-28 00:31:10
 * @FilePath: /oiltrack-management/src/components/scrollStatusCard/index.vue
 * @Description: slide icon card ~/img/alarm_center.png
 * Copyright (c) 2024 by mxj, All Rights Reserved.
-->
<script setup lang="ts">
import { Icon } from 'vant'
import AlarmCenter from '~/img/alarm_center.png'
const iconsList = [
  // 初始化8个图标的数组
  { name: '~/img/alarm_center.png' },
  { name: 'icon2' },
  { name: 'icon3' },
  { name: 'icon4' },
  { name: 'icon5' },
  { name: 'icon6' },
  { name: 'icon7' },
  { name: 'icon8' },
]

const currentIndex = ref(0)
const itemsPerPage = ref(4)
const carouselContainerRef = ref<HTMLDivElement | null>(null)

const currentIcons = computed(() => {
  return iconsList.slice(currentIndex.value * itemsPerPage.value, (currentIndex.value + 1) * itemsPerPage.value)
})

onMounted(() => {
  // 添加滑动监听，这里假设你已经有了滑动检测的方法，例如hammerjs或者其他手势库
  // 注意：这是一个简化的示例，实际项目中可能需要更复杂的滑动处理逻辑
  // 并非此处详述的重点，故省略这部分实现
})

function beforeEnter(el: HTMLElement) {
  // 设置进入动画样式，例如向左或向右移动
  el.style.transform = 'translateX(100%)'
}

function leave(el: HTMLElement, done: () => void) {
  // 设置离开动画样式，结束后清理样式
  // el.offsetWidth
  el.style.transition = 'transform .3s'
  el.style.transform = 'translateX(0)'
  setTimeout(() => {
    done()
  }, 300)
}
</script>

<template>
  <div ref="carouselContainerRef" class="carousel-container">
    <transition-group name="slide" tag="div" @before-enter="beforeEnter" @leave="leave">
      <div
        v-for="(icon, index) in currentIcons"
        :key="index"
        class="carousel-item"
      >
        <Icon :name="AlarmCenter" size="3em" />
      </div>
    </transition-group>
  </div>
</template>

<style scoped>
.carousel-container {
  overflow: hidden;
  width: fit-content;
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(-100%);
}

.carousel-item {
  display: inline-block;
  margin-right: 1rem;
}

.carousel-control {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}
.carousel-control.left {
  left: 0;
}
.carousel-control.right {
  right: 0;
}
</style>
