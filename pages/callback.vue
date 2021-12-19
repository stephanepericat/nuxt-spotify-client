<template>
  <div class="callback-view">
    <h3 class="text-title-small" v-text="$t('redirectingToDashboard')" />
    <i class="el-icon-loading large-icon" />
  </div>
</template>
<script>
export default {
  name: 'CallbackPage',

  created() {
    if (this.$auth.loggedIn) {
      this.$router.push({ path: '/' })
    }
  },
}
</script>
<style lang="scss" scoped>
@import '~/assets/style/mixins';

.callback-view {
  @include centeredPage();
}
</style>
