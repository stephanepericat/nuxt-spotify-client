export const state = () => ({
  isPlaying: false,
  current: null,
})

export const mutations = {
  setPlayState: (state, isPlaying) => {
    state.isPlaying = isPlaying
  },
}

export const actions = {
  togglePlayState: ({ commit, state }) => {
    commit('setPlayState', !state.isPlaying)
  },
}
