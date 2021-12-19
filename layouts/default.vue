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
import { defineComponent, useAsync } from '@nuxtjs/composition-api'
import usePlaylists from '~/composables/services/usePlaylists'

export default defineComponent({
  name: 'DefaultLayout',

  setup() {
    const { getUserPlaylists } = usePlaylists()

    const playlists = useAsync(() => getUserPlaylists())

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
