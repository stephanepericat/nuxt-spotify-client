import consola from 'consola'
import { useContext } from '@nuxtjs/composition-api'

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
  getUserPlaylists: async ({ commit }, data) => {
    const { $axios } = useContext()

    consola.info('Retrieving user playlists...', data)

    try {
      const params = { limit: 50 }
      const { data } = await $axios.get('/me/playlists', { params })
      const { items = [] } = data

      commit('setItems', items)
    } catch (e) {
      consola.error('Error retrieving user playlists...', e)
      commit('setItems', null)
    }
  },
}
