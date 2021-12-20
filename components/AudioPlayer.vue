<template>
  <el-row class="audio-player">
    <div class="audio-player__current">
      <div class="audio-player__info">
        <div class="audio-player__info--thumbnail">
          <img class="audio-player__info--thumbnail-img" :src="artworkUrl" />
        </div>
        <div class="audio-player__info--details">
          <p
            class="audio-player__info--details-track text-title-small"
            v-text="trackLabel"
          />
          <p
            class="audio-player__info--details-artist text-supplementary"
            v-text="artistLabel"
          />
        </div>
        <div class="audio-player__info--like">
          <i
            class="el-icon-star-off audio-player__info--like-btn"
            @click="onLikeTrackClick"
          ></i>
        </div>
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
        <el-slider v-model="progress" />
      </div>
    </div>
    <div class="audio-player__devices">
      <i
        class="el-icon-s-unfold audio-player__devices--btn"
        @click="onQueueClick"
      />
      <i
        class="el-icon-s-operation audio-player__devices--btn"
        @click="onDeviceClick"
      />
      <div class="audio-player__devices--volume">
        <i
          class="el-icon-headset audio-player__devices--btn"
          @click="onVolumeClick"
        />
        <el-slider v-model="volume" />
      </div>
    </div>
  </el-row>
</template>
<script>
import { computed, defineComponent, ref, toRefs } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'AudioPlayer',

  props: {
    artistLabel: { type: String, default: null },
    artworkUrl: { type: String, default: null },
    isLoopEnabled: Boolean,
    isPlaying: Boolean,
    isRandomEnabled: Boolean,
    trackId: { type: String, default: null },
    trackLabel: { type: String, default: null },
  },

  emits: [
    'like-track',
    'toggle-loop-state',
    'toggle-play-state',
    'toggle-random-state',
  ],

  setup(props, { emit }) {
    const { isLoopEnabled, isPlaying, isRandomEnabled, trackId } = toRefs(props)
    const progress = ref(0)
    const volume = ref(50)
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

    const onDeviceClick = () => emit('device-click')
    const onLikeTrackClick = () => emit('like-track', trackId.value)
    const onQueueClick = () => emit('queue-click')
    const onVolumeClick = () => emit('volume-toggle')

    const toggleLoopState = () => emit('toggle-loop-state')
    const togglePlayState = () => emit('toggle-play-state')
    const toggleRandomState = () => emit('toggle-random-state')

    return {
      loopButtonType,
      onDeviceClick,
      onLikeTrackClick,
      onQueueClick,
      onVolumeClick,
      playIcon,
      progress,
      randomButtonType,
      toggleLoopState,
      togglePlayState,
      toggleRandomState,
      volume,
    }
  },
})
</script>
<style lang="scss" scoped>
@import '~/assets/style/mixins';
@import '~/assets/style/variables';

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

  &__info {
    margin-right: 10px;
    display: flex;
    height: 100%;

    &--details {
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;

      &-track {
        margin-bottom: 8px;
      }

      &-track,
      &-artist {
        min-width: 20px;
        max-width: 175px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }

    &--like {
      flex-basis: 30px;
      display: flex;
      align-items: center;
      justify-content: flex-end;

      &-btn {
        font-size: 24px;

        &:hover {
          cursor: pointer;
        }
      }
    }

    &--thumbnail {
      flex-basis: 75px;
      flex-shrink: 0;
      border: 1px solid $color-highlight;
      margin-right: 12px;

      &-img {
        height: 100%;
        width: 100%;
        // background: #ccc;
      }
    }
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
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    // background: #f70;

    &--btn {
      font-size: 22px;
      margin-right: 16px;

      &:hover {
        cursor: pointer;
      }
    }

    &--volume {
      flex-basis: 140px;
      flex-grow: 1;
      display: flex;
      align-items: center;
      // background: red;

      .el-slider {
        width: calc(100% - 46px);
      }
    }
  }
}
</style>
