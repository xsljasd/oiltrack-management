<script setup lang="ts">
import Map from '@/components/map/MapContainer.vue'

definePage({
  name: 'vehicleMonitor',
  meta: {
    level: 2,
    title: '车辆监控',
  },
})
</script>

<template>
  <div>
    <Map />
  </div>
</template>

<route lang="yaml">
  meta:
    layout: home
</route>
