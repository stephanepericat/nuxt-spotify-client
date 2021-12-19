import consola from 'consola'

import useService from '~/composables/utils/useService'

export default () => {
  const { get, loggedIn } = useService()

  const getUserPlaylists = async (limit = 25, offset = 0) => {
    if (!loggedIn) {
      return new Error('Unauthorized')
    }

    try {
      const { data } = await get(`/me/playlists`, { limit, offset })
      const { items = [] } = data
      return items
    } catch (e) {
      consola.error(e)
    }
  }

  return { getUserPlaylists }
}
