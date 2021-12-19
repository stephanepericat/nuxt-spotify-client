<template>
  <el-container class="spotify-client login-layout">
    <nuxt-child />
  </el-container>
</template>
<script>
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'LoginLayout',
})
</script>
