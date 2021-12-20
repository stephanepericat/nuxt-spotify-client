<template>
  <div class="home-view">
    <h3 class="text-title-small" v-text="greetings" />
    <p>Content goes here</p>
    <nuxt-link :to="{ path: '/user' }">user page</nuxt-link>
  </div>
</template>
<script>
import {
  computed,
  defineComponent,
  ref,
  useContext,
} from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'HomeView',

  setup() {
    const { $auth, i18n } = useContext()
    const username = ref($auth.user.display_name)
    const greetings = computed(() =>
      i18n.t('greetings', { username: username.value })
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
