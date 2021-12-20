import useService from '~/composables/utils/useService'

export default () => {
  const { checkAuth, get } = useService()

  const getUserPlaylists = async (limit = 50, offset = 0) => {
    checkAuth()

    try {
      const { data } = await get(`/me/playlists`, { limit, offset })
      const { items = [] } = data
      return items
    } catch (e) {
      throw new Error(e)
    }
  }

  return { getUserPlaylists }
}
