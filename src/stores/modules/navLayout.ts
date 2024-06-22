import { defineStore } from 'pinia'

const navLayoutStore = defineStore('nav-layout-store', () => {
  type pageStates = 'home' | 'vehicleMonitor' | 'vehicleAuthorization' | 'personalCenter'

  const router = useRouter()

  const pageCurrentState = ref<pageStates>('home')
  const changeRoute = (nextState: pageStates) => {
    pageCurrentState.value = nextState
    if (nextState === 'home')
      router.push('/')
    else router.push(nextState)
  }

  return {
    pageCurrentState,
    changeRoute,
  }
})

export default navLayoutStore
