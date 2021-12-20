<template>
  <el-row class="audio-player">
    <div class="audio-player__current">info</div>
    <div class="audio-player__controls">
      <div class="audio-player__controls--bar">
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
      </div>
      <div class="audio-player__controls--progress">
        <el-slider v-model="progress"></el-slider>
      </div>
    </div>
    <div class="audio-player__devices">devices</div>
  </el-row>
</template>
<script>
import { computed, defineComponent, ref } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'AudioPlayer',

  setup() {
    const isPlaying = ref(false)
    const progress = ref(0)
    const playIcon = computed(() =>
      isPlaying.value ? 'el-icon-video-pause' : 'el-icon-video-play'
    )

    const togglePlayState = () => (isPlaying.value = !isPlaying.value)

    return { playIcon, progress, togglePlayState }
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

  &__current {
    flex-basis: 300px;
    height: 60px;
    // background: #f70;
  }

  &__controls {
    flex-grow: 1;
    flex-shrink: 0;
    text-align: center;
    height: 80px;
    // background: yellow;

    &--progress {
      padding: 0 20px;
    }
  }

  &__devices {
    flex-basis: 300px;
    height: 30px;
    // background: #f70;
  }
}
</style>
