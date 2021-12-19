<template>
  <div class="audio-player">Audio Player</div>
</template>
<script>
export default {
  name: 'AudioPlayer',
}
</script>
<style lang="scss" scoped>
@import '~/assets/style/mixins';

.audio-player {
  @include centeredPage();
}
</style>
