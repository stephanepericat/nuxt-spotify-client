<template>
  <el-row class="audio-player">
    <el-button
      class="audio-player__button"
      icon="el-icon-sort"
      type="info"
      circle
    ></el-button>
    <el-button
      class="audio-player__button"
      icon="el-icon-d-arrow-left"
      type="success"
      circle
    ></el-button>
    <el-button
      class="audio-player__button"
      :icon="playIcon"
      type="success"
      circle
      @click="togglePlayState"
    ></el-button>
    <el-button
      class="audio-player__button"
      icon="el-icon-d-arrow-right"
      type="success"
      circle
    ></el-button>
    <el-button
      class="audio-player__button"
      icon="el-icon-refresh"
      type="info"
      circle
    ></el-button>
  </el-row>
</template>
<script>
import { computed, defineComponent, ref } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'AudioPlayer',

  setup() {
    const isPlaying = ref(false)
    const playIcon = computed(() =>
      isPlaying.value ? 'el-icon-video-pause' : 'el-icon-video-play'
    )

    const togglePlayState = () => (isPlaying.value = !isPlaying.value)

    return { playIcon, togglePlayState }
  },
})
</script>
<style lang="scss" scoped>
@import '~/assets/style/mixins';

.audio-player {
  @include centeredPage();

  flex-direction: row;

  &__button {
    ::v-deep i {
      font-size: 20px;
    }
  }
}
</style>
