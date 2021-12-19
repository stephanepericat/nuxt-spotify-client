<template>
  <div class="user-view">
    <h1 class="text-title-main" v-text="username" />
  </div>
</template>
<script>
import { defineComponent, ref, useContext } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'UserPage',

  setup() {
    const { $auth } = useContext()
    const username = ref($auth.user.display_name)

    return { username }
  },
})
</script>
<style lang="scss" scoped>
.user-view {
  height: 100%;
  width: 100%;
}
</style>
