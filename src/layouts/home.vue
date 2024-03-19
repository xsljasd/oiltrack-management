<!--
 * @Author: jiangjianhao1997@163.com
 * @Date: 2024-03-12 16:40:49
 * @LastEditors: adolf Jiang jiangjianhao1997@163.com
 * @LastEditTime: 2024-03-19 16:42:47
 * @FilePath: /oiltrack-management/src/layouts/home.vue
 * @Description: home layout
 * Copyright (c) 2024 by mxj, All Rights Reserved.
-->
<script setup lang="ts">
import HomeIcon from '~/icon/home.png'
import HomeClickIcon from '~/icon/home_click.png'
import PersonalCenter from '~/icon/personal_center.png'
import PersonalCenterClick from '~/icon/personal_center_click.png'
import VehicleMonitor from '~/icon/vehicle_monitor.png'
import VehicleMonitorClick from '~/icon/vehicle_monitor_click.png'
import VehicleAuthorization from '~/icon/vehicle_authorization.png'
import VehicleAuthorizationClick from '~/icon/vehicle_authorization_click.png'
import store from '@/stores/modules/navLayout'

const { changeRoute } = store()
</script>

<template>
  <main text="gray-700 dark:gray-200">
    <RouterView />

    <div mx-auto mt-15 text-center text-14 opacity-50>
      <nav fixed bottom-0 w-100vw flex items-center justify-around bg-layout-navcolor p-3vw>
        <ClickableIcon nav-title="home" :init-icon="HomeIcon" :click-icon="HomeClickIcon" @click="changeRoute('home')" />
        <ClickableIcon nav-title="vehicleMonitor" :init-icon="VehicleMonitor" :click-icon="VehicleMonitorClick" @click="changeRoute('vehicleMonitor')" />
        <ClickableIcon nav-title="vehicleAuthorization" :init-icon="VehicleAuthorization" :click-icon="VehicleAuthorizationClick" @click="changeRoute('vehicleAuthorization')" />
        <ClickableIcon nav-title="personalCenter" :init-icon="PersonalCenter" :click-icon="PersonalCenterClick" @click="changeRoute('personalCenter')" />
      </nav>
    </div>
  </main>
</template>
