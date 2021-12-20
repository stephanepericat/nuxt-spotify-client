export const state = () => ({
  current: null,
  isLoopEnabled: false,
  isPlaying: false,
  isRandomEnabled: false,
})

export const mutations = {
  setLoopState: (state, isLoopEnabled) => {
    state.isLoopEnabled = isLoopEnabled
  },

  setPlayState: (state, isPlaying) => {
    state.isPlaying = isPlaying
  },

  setRandomState: (state, isRandomEnabled) => {
    state.isRandomEnabled = isRandomEnabled
  },
}

export const actions = {
  toggleLoopState: ({ commit, state }) => {
    commit('setLoopState', !state.isLoopEnabled)
  },

  togglePlayState: ({ commit, state }) => {
    commit('setPlayState', !state.isPlaying)
  },

  toggleRandomState: ({ commit, state }) => {
    commit('setRandomState', !state.isRandomEnabled)
  },
}
