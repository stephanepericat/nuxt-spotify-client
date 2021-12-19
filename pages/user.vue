<template>
  <div class="user-view">
    <h1 class="text-title-main" v-text="$auth.user.display_name" />
  </div>
</template>
<script>
export default {
  name: 'UserPage',
}
</script>
<style lang="scss" scoped>
.user-view {
  height: 100%;
  width: 100%;
}
</style>
