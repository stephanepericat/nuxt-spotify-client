<template>
  <el-container class="spotify-client default-layout">
    <el-aside>Navbar</el-aside>
    <el-main>
      <nuxt-child />
    </el-main>
  </el-container>
</template>
<script>
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'DefaultLayout',
})
</script>
