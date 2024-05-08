import { defineStore } from 'pinia'

const navLayoutStore = defineStore('nav-layout-store', () => {
  type pageStates = 'home' | 'vehicleMonitor' | 'vehicleAuthorization' | 'personalCenter'

  const pageCurrentState = ref<pageStates>('home')
  const changeRoute = (nextState: pageStates) => {
    pageCurrentState.value = nextState
  }

  return {
    pageCurrentState,
    changeRoute,
  }
})

export default navLayoutStore
