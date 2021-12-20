import consola from 'consola'

export const state = () => ({
  isPlaying: false,
  currentTrack: null,
})

export const actions = {
  nuxtServerInit: () => {
    consola.info('nuxt server init')
  },
}
