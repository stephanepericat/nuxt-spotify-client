<template>
  <el-container class="spotify-client">
    <el-aside>Navbar</el-aside>
    <el-main>
      <nuxt-child />
    </el-main>
  </el-container>
</template>
<script>
export default {
  name: 'DefaultLayout',
}
</script>
