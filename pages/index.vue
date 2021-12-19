<template>
  <div class="main-view">
    <ElButton v-if="!$auth.loggedIn" @click="$auth.loginWith('spotify')">
      {{ $t('login') }}
    </ElButton>
    <template v-else>
      <h3
        class="text-title-small"
        v-text="$t('greetings', { username: $auth.user.display_name })"
      />
    </template>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',

  auth: false,
}
</script>
<style lang="scss" scoped>
@import '~/assets/style/mixins';

.main-view {
  @include centeredPage();
}
</style>
