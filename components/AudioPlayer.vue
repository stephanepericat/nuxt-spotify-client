<template>
  <el-row class="audio-player">
    <div class="audio-player__current">
      <div class="audio-player__info">
        <div class="audio-player__info--thumbnail"></div>
      </div>
    </div>
    <div class="audio-player__controls">
      <div class="audio-player__controls--bar">
        <el-button
          class="audio-player__button"
          icon="el-icon-sort"
          :type="randomButtonType"
          circle
          @click="toggleRandomState"
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
          :type="loopButtonType"
          circle
          @click="toggleLoopState"
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
import { computed, defineComponent, ref, toRefs } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'AudioPlayer',

  props: {
    isLoopEnabled: Boolean,
    isPlaying: Boolean,
    isRandomEnabled: Boolean,
  },

  emits: ['toggle-loop-state', 'toggle-play-state', 'toggle-random-state'],

  setup(props, { emit }) {
    const { isLoopEnabled, isPlaying, isRandomEnabled } = toRefs(props)
    const progress = ref(0)
    const playIcon = computed(() =>
      isPlaying && isPlaying.value
        ? 'el-icon-video-pause'
        : 'el-icon-video-play'
    )
    const loopButtonType = computed(() =>
      isLoopEnabled && isLoopEnabled.value ? 'warning' : 'info'
    )
    const randomButtonType = computed(() =>
      isRandomEnabled && isRandomEnabled.value ? 'warning' : 'info'
    )

    const toggleLoopState = () => emit('toggle-loop-state')
    const togglePlayState = () => emit('toggle-play-state')
    const toggleRandomState = () => emit('toggle-random-state')

    return {
      loopButtonType,
      playIcon,
      progress,
      randomButtonType,
      toggleLoopState,
      togglePlayState,
      toggleRandomState,
    }
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
    flex-basis: 350px;
    height: 75px;
    // background: #f70;
  }

  &__controls {
    flex-grow: 1;
    flex-shrink: 0;
    text-align: center;
    height: 75px;
    // background: yellow;

    &--progress {
      padding: 0 20px;
    }
  }

  &__devices {
    flex-basis: 250px;
    height: 25px;
    // background: #f70;
  }
}
</style>
