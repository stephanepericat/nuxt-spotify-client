<template>
  <div>
    <ElButton v-if="!$auth.loggedIn" @click="$auth.loginWith('spotify')"
      >Login</ElButton
    >
    <div v-else>
      <p>Welcome, {{ $auth.user.display_name }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',

  auth: false,
}
</script>
