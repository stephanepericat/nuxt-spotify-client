<template>
  <div class="login-view">
    <h3
      v-if="$route.query.error"
      class="text-title-small"
      v-text="$t('genericError')"
    />
    <template v-else>
      <h3
        v-if="!$auth.loggedIn && !$route.query.code"
        class="text-title-small"
        v-text="$t('redirecting')"
      />
      <h3 v-else class="text-title-small" v-text="$t('loggingIn')" />
      <i class="el-icon-loading large-icon" />
    </template>
  </div>
</template>
<script>
export default {
  name: 'LoginPage',

  layout: 'login',

  created() {
    if (!this.$auth.loggedIn && !this.$route.query.code) {
      this.$auth.loginWith('spotify')
    }

    if (this.$route.query.error) {
      this.$router.push({ path: '/' })
    }
  },
}
</script>
<style lang="scss" scoped>
@import '~/assets/style/mixins';

.login-view {
  @include centeredPage();
}
</style>
