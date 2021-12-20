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
import { computed, defineComponent, ref, toRefs } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'AudioPlayer',

  props: {
    isPlaying: Boolean,
  },

  emits: ['toggle-play-state'],

  setup(props, { emit }) {
    const { isPlaying } = toRefs(props)
    const progress = ref(0)
    const playIcon = computed(() =>
      isPlaying && isPlaying.value
        ? 'el-icon-video-pause'
        : 'el-icon-video-play'
    )

    const togglePlayState = () => emit('toggle-play-state')

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
