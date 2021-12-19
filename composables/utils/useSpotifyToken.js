import { useLocalStorage } from '@vueuse/core'

export default () => {
  const token = useLocalStorage('auth._token.spotify')
  return { token }
}
