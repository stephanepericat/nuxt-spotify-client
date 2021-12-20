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
        <AudioPlayer />
      </el-footer>
    </el-container>
  </el-container>
</template>
<script>
// import consola from 'consola'
import { computed, defineComponent, useStore } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'DefaultLayout',

  setup() {
    const $store = useStore()
    const playlists = computed(() => $store.state.playlists.items)

    // cache playlists if not yet available..
    if (!playlists.value) {
      $store.dispatch('playlists/getUserPlaylists', { limit: 50, offset: 0 })
    }

    return { playlists }
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
