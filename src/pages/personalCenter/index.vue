<script setup lang="ts">
import { storeToRefs } from 'pinia'
import useCounterStore from '@/stores/modules/counter'

definePage({
  name: 'personalCenter',
  meta: {
    level: 2,
    title: '🍍 持久化 personalCenter 状态',
  },
})

const counterStore = useCounterStore()
const { counter } = storeToRefs(counterStore)

function add() {
  counterStore.increment()
}
</script>

<template>
  <div>
    <h1 class="text-6xl color-pink font-semibold">
      Hello, Pinia!
    </h1>
    src/pages/counter
    <p class="mt-4 text-gray-700 dark:text-white">
      This is a simple example of persisting Pinia state.
      To verify its effectiveness, you can refresh the interface and observe it.
    </p>

    <p class="mt-4">
      number：<strong class="text-green-500"> {{ counter }} </strong>
    </p>

    <button class="btn" @click="add">
      Add
    </button>
  </div>
</template>

<route lang="yaml">
  meta:
    layout: home
</route>
