<template>
  <el-container class="spotify-client">
    <NuxtChild />
  </el-container>
</template>
<script>
export default {
  name: 'DefaultLayout',
}
</script>
<style lang="scss" scoped>
.spotify-client {
  // background-color: #111;
  height: 100vh;
}
</style>
