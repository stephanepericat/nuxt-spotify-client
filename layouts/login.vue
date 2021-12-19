<template>
  <el-container class="spotify-client">
    <NuxtChild />
  </el-container>
</template>
<script>
export default {
  name: 'LoginLayout',
}
</script>
<style lang="scss" scoped>
.spotify-client {
  height: 100vh;
}
</style>
