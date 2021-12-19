<template>
  <div class="main-view">
    <ElButton @click="$auth.loginWith('spotify')">
      {{ $t('login') }}
    </ElButton>
  </div>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'
import useRedirect from '~/composables/useRedirect'

export default defineComponent({
  name: 'IndexPage',

  layout: 'login',

  auth: false,

  setup() {
    useRedirect()
  },
})
</script>
<style lang="scss" scoped>
@import '~/assets/style/mixins';

.main-view {
  @include centeredPage();
}
</style>
