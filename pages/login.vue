<template>
  <div>
    <p v-if="$route.query.error">Something went wrong.</p>
    <p v-else>Logging In...</p>
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
