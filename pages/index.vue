<template>
  <div class="main-view">
    <ElButton @click="$auth.loginWith('spotify')">
      {{ $t('login') }}
    </ElButton>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',

  layout: 'login',

  auth: false,

  asyncData({ $auth, redirect }) {
    if ($auth.loggedIn) {
      redirect({ path: '/home' })
    }
  },
}
</script>
<style lang="scss" scoped>
@import '~/assets/style/mixins';

.main-view {
  @include centeredPage();
}
</style>
