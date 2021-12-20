<template>
  <el-container class="spotify-client default-layout">
    <el-aside class="default-layout__sidebar">
      <ul>
        <li v-for="playlist in playlists" :key="playlist.id">
          {{ playlist.name }}
        </li>
      </ul>
    </el-aside>
    <el-container class="default-layout__main">
      <el-header class="default-layout__header">header</el-header>
      <el-main class="default-layout__contents">
        <nuxt-child />
      </el-main>
      <el-footer class="default-layout__footer" height="100px">
        <audio-player
          artist-label="Alluvial"
          artwork-url="https://www.grande-rock.com/sites/default/files/styles/large1/public/imagesnews/Alluvial-Sarcoma-cover2021.jpg?itok=H0gb03iT"
          :is-loop-enabled="isLoopEnabled"
          :is-playing="isPlaying"
          :is-random-enabled="isRandomEnabled"
          track-id="vlcT8RVn1uWMsYpq2e5K"
          track-label="Ulysses"
          @like-track="onLikeTrackClick"
          @toggle-loop-state="onToggleLoopState"
          @toggle-play-state="onTogglePlayState"
          @toggle-random-state="onToggleRandomState"
        />
      </el-footer>
    </el-container>
  </el-container>
</template>
<script>
import consola from 'consola'
import { computed, defineComponent, useStore } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'DefaultLayout',

  setup() {
    const $store = useStore()
    const playlists = computed(() => $store.state.playlists.items)

    const isLoopEnabled = computed(() => $store.state.audio.isLoopEnabled)
    const isPlaying = computed(() => $store.state.audio.isPlaying)
    const isRandomEnabled = computed(() => $store.state.audio.isRandomEnabled)

    const onLikeTrackClick = (trackId) => consola.info('like track', trackId)

    const onToggleLoopState = () => $store.dispatch('audio/toggleLoopState')
    const onTogglePlayState = () => $store.dispatch('audio/togglePlayState')
    const onToggleRandomState = () => $store.dispatch('audio/toggleRandomState')

    // cache playlists if not yet available..
    if (!playlists.value) {
      $store.dispatch('playlists/getUserPlaylists', { limit: 50, offset: 0 })
    }

    return {
      isLoopEnabled,
      isPlaying,
      isRandomEnabled,
      onLikeTrackClick,
      onToggleLoopState,
      onTogglePlayState,
      onToggleRandomState,
      playlists,
    }
  },
})
</script>
<style lang="scss" scoped>
@import '~/assets/style/variables';

.default-layout {
  &__footer {
    border-top: 1px solid $color-highlight;
  }
}
</style>
