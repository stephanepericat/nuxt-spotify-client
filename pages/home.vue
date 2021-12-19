<template>
  <div class="home-view">
    <h3 class="text-title-small" v-text="greetings" />
  </div>
</template>
<script>
import { defineComponent, computed, useContext } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'HomeView',

  setup() {
    const { $auth, $t } = useContext()
    const greetings = computed(() =>
      $t('greetings', { username: $auth.user.display_name })
    )

    return {
      greetings,
    }
  },
})
</script>
<style lang="scss" scoped>
.home-view {
  height: 100%;
  width: 100%;
}
</style>
