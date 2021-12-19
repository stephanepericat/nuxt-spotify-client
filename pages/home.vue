<template>
  <div class="home-view">
    <h3
      class="text-title-small"
      v-text="$t('greetings', { username: $auth.user.display_name })"
    />
  </div>
</template>
<script>
export default {
  name: 'HomeView',
}
</script>
<style lang="scss" scoped>
.home-view {
  height: 100%;
  width: 100%;
}
</style>
