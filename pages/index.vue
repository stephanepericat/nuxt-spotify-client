<template>
  <div class="main-view">
    <el-button @click="$auth.loginWith('spotify')">
      {{ buttonLabel }}
    </el-button>
  </div>
</template>

<script>
import { computed, defineComponent, useContext } from '@nuxtjs/composition-api'
import useRedirect from '~/composables/utils/useRedirect'

export default defineComponent({
  name: 'IndexPage',

  layout: 'login',

  auth: false,

  setup() {
    const { i18n } = useContext()
    const buttonLabel = computed(() => i18n.t('login'))
    const { loggedIn } = useRedirect()

    return {
      buttonLabel,
      loggedIn,
    }
  },
})
</script>
<style lang="scss" scoped>
@import '~/assets/style/mixins';

.main-view {
  @include centeredPage();
}
</style>
