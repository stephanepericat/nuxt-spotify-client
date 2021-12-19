<template>
  <div class="user-view">
    <h1 class="text-title-main" v-text="$auth.user.display_name" />
  </div>
</template>
<script>
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'UserPage',
})
</script>
<style lang="scss" scoped>
.user-view {
  height: 100%;
  width: 100%;
}
</style>
