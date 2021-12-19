<template>
  <div class="callback-view">
    <h3 class="text-title-small">Redirecting to dashboard...</h3>
    <i class="el-icon-loading large-icon"></i>
  </div>
</template>
<script>
export default {
  name: 'CallbackPage',

  mounted() {
    if (this.$auth.loggedIn) {
      this.$router.push({ path: '/' })
    }
  },
}
</script>
<style lang="scss" scoped>
.callback-view {
  width: 100%;
  text-align: center;
}
</style>
