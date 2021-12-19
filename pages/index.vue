<template>
  <div class="main-view">
    <ElButton v-if="!$auth.loggedIn" @click="$auth.loginWith('spotify')">
      Login
    </ElButton>
    <template v-else>
      <h3 class="text-title-small">Welcome, {{ $auth.user.display_name }}!</h3>
    </template>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',

  auth: false,
}
</script>
<style lang="scss" scoped>
.main-view {
  width: 100%;
  text-align: center;
}
</style>
