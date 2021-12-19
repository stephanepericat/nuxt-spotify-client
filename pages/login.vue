<template>
  <div class="login-view">
    <h3 v-if="error" class="text-title-small" v-text="genericError" />
    <template v-else>
      <h3
        v-if="!loggedIn && !code"
        class="text-title-small"
        v-text="redirecting"
      />
      <h3 v-else class="text-title-small" v-text="loggingIn" />
      <i class="el-icon-loading large-icon" />
    </template>
  </div>
</template>
<script>
import { computed, defineComponent, useContext } from '@nuxtjs/composition-api'
import useLogin from '~/composables/useLogin'

export default defineComponent({
  name: 'LoginPage',

  layout: 'login',

  setup() {
    const { i18n } = useContext()
    const genericError = computed(() => i18n.t('genericError'))
    const redirecting = computed(() => i18n.t('redirecting'))
    const loggingIn = computed(() => i18n.t('loggingIn'))

    const { loggedIn, code, error } = useLogin()

    return { loggedIn, loggingIn, code, error, genericError, redirecting }
  },
})
</script>
<style lang="scss" scoped>
@import '~/assets/style/mixins';

.login-view {
  @include centeredPage();
}
</style>
