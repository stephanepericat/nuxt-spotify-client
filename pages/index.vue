<template>
  <div class="main-view">
    <ElButton @click="$auth.loginWith('spotify')">
      {{ $t('login') }}
    </ElButton>
  </div>
</template>

<script>
import { defineComponent, useContext, useRouter } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'IndexPage',

  layout: 'login',

  auth: false,

  setup() {
    const { $auth } = useContext()
    const router = useRouter()

    if ($auth.loggedIn) {
      router.push({ path: '/home' })
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
