<template>
  <div class="login-view">
    <h3 v-if="error" class="text-title-small" v-text="$t('genericError')" />
    <template v-else>
      <h3
        v-if="!loggedIn && !code"
        class="text-title-small"
        v-text="$t('redirecting')"
      />
      <h3 v-else class="text-title-small" v-text="$t('loggingIn')" />
      <i class="el-icon-loading large-icon" />
    </template>
  </div>
</template>
<script>
import { defineComponent } from '@nuxtjs/composition-api'
import useLogin from '~/composables/useLogin'

export default defineComponent({
  name: 'LoginPage',

  layout: 'login',

  setup() {
    const { loggedIn, code, error } = useLogin()

    return { loggedIn, code, error }
  },
})
</script>
<style lang="scss" scoped>
@import '~/assets/style/mixins';

.login-view {
  @include centeredPage();
}
</style>
