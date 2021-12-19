<template>
  <div class="login-view">
    <h3 v-if="$route.query.error" class="text-title-small">
      Something went wrong.
    </h3>
    <template v-else>
      <h3 class="text-title-small">Logging in...</h3>
      <i class="el-icon-loading large-icon"></i>
    </template>
  </div>
</template>
<script>
export default {
  name: 'LoginPage',

  mounted() {
    if (this.$route.query.error) {
      this.$router.push({ path: '/' })
    }
  },
}
</script>
<style lang="scss" scoped>
.login-view {
  width: 100%;
  text-align: center;
}
</style>
