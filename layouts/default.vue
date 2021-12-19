<template>
  <el-container class="spotify-client default-layout">
    <el-aside class="spotify-client__sidebar">
      <ul>
        <li v-for="playlist in playlists" :key="playlist.id">
          {{ playlist.name }}
        </li>
      </ul>
    </el-aside>
    <el-container class="spotify-client__main">
      <el-header class="spotify-client__header">header</el-header>
      <el-main class="spotify-client__contents">
        <nuxt-child />
      </el-main>
      <el-footer class="spotify-client__footer" height="100px">
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
