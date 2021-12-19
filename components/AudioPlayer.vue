<template>
  <div class="audio-player">Audio Player</div>
</template>
<script>
export default {
  name: 'AudioPlayer',
}
</script>
<style lang="scss" scoped>
@import '~/assets/style/variables';
@import '~/assets/style/mixins';

.audio-player {
  @include centeredPage();
  height: calc(100% - 10px);

  border-top: 1px solid $color-highlight;
}
</style>
