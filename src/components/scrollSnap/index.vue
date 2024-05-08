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
</script>

<template>
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
</template>

<style scoped>
.carousel-container {
  overflow: hidden;
  height: fit-content;
  margin: auto;
  width: 100%;
  display: flex;
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
}
.carousel-container span {
  width: calc(100vw - 32vw);
  padding: 4px;
  scroll-snap-align: center;
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 2px;
}
</style>
