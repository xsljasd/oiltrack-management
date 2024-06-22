<!--
 * @Author: jiangjianhao1997@163.com
 * @Date: 2024-05-01 12:13:53
 * @LastEditors: adolf Jiang jiangjianhao1997@163.com
 * @LastEditTime: 2024-05-01 13:32:08
 * @FilePath: /oiltrack-management/src/components/scrollSnap/index.vue
 * @Description:scroll snap for center
 * Copyright (c) 2024 by mxj, All Rights Reserved.
-->
<script setup lang="ts">
import { Icon } from 'vant'
import AlarmCenter from '~/img/alarm_center.png'
import ReportQuery from '~/img/report_query.png'
import TrackPlayback from '~/img/track_playback.png'
import VehicleMonitor from '~/img/vehicle_monitor.png'

const containerWidth = window.innerWidth * 2 / 3
const IconWidth = ref(`${(containerWidth - 14) / 4}px`)

// TODO:open bind move carousel-container to change currentIndex
const currentIndex = ref(0)
const slides = ref([])
const dots = ref([])
onMounted(() => {
  slides.value = document.querySelectorAll('.carousel')
  dots.value = document.querySelectorAll('.dot')
  updateSlide(currentIndex.value) // Initialize the first slide
})
function updateSlide(index) {
  currentIndex.value = index
  const offset = -(index / slide.value.length) * 100
  slides.value[0].parentNode.style.transform = `translateX(${offset}%)`
  dots.value.forEach((dot, dotIndex) => {
    dot.classList.remove('active')
    if (dotIndex === index)
      dot.classList.add('active')
  })
}
</script>

<template>
  <div class="scroll-snap" relative w-full flex flex-col>
    <div class="carousel-container">
      <span class="carousel">
        <Icon :name="AlarmCenter" :size="IconWidth" />
        <Icon :name="ReportQuery" :size="IconWidth" />
        <Icon :name="TrackPlayback" :size="IconWidth" />
        <Icon :name="VehicleMonitor" :size="IconWidth" />
      </span>
      <span class="carousel">
        <Icon :name="AlarmCenter" :size="IconWidth" />
        <Icon :name="ReportQuery" :size="IconWidth" />
        <Icon :name="TrackPlayback" :size="IconWidth" />
        <Icon :name="VehicleMonitor" :size="IconWidth" />
      </span>
    </div>

    <div class="dots">
      <span class="dot" @click="updateSlide(0)" /><span class="dot" @click="updateSlide(1)" />
    </div>
  </div>
</template>

<style scoped>
.carousel-container {
  overflow: hidden;
  height: fit-content;
  margin: auto;
  width: 100%;
  display: flex;
  overflow-x: scroll;
  scrollbar-width: none;
  scroll-snap-type: x mandatory;
  &::-webkit-scrollbar {
    display: none;
  }
}
span.carousel {
  width: calc(100vw - 32vw);
  padding: 4px;
  scroll-snap-align: center;
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 2px;
}
.dots {
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 5px;
}

.dot {
  width: 10px;
  height: 10px;
  background-color: #eee;
  border-radius: 50%;
  cursor: pointer;
}

.dot.active {
  background-color: #717171;
}
</style>
