import consola from 'consola'
import usePlaylists from '~/composables/services/usePlaylists'

export const state = () => ({
  items: null,
})

export const mutations = {
  setItems: (state, items) => {
    if (!items) {
      return
    }

    state.items = [...items]
  },
}

export const actions = {
  getUserPlaylists: async ({ commit }, data = {}) => {
    const { getUserPlaylists } = usePlaylists()
    const { limit = 50, offset = 0 } = data

    consola.info('Retrieving user playlists...', data)

    try {
      const items = await getUserPlaylists(limit, offset)
      commit('setItems', items)
    } catch (e) {
      consola.error('Error retrieving user playlists...', e)
      commit('setItems', null)
    }
  },
}
