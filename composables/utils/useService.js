import { reactive, useContext } from '@nuxtjs/composition-api'

import useSpotifyToken from '~/composables/utils/useSpotifyToken'

export default () => {
  const { $axios, $auth } = useContext()
  const { token } = useSpotifyToken()
  const { loggedIn, user } = $auth
  const headers = reactive({ Authorization: token.value })

  const get = (url, params = {}) => $axios.get(url, { headers, params })

  return { get, loggedIn, user }
}
