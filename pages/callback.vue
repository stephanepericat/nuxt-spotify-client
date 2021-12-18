<template>
  <div>logging in...</div>
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
