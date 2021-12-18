<template>
  <div>
    <ElButton v-if="!$auth.loggedIn" @click="$auth.loginWith('spotify')"
      >Login</ElButton
    >
    <div v-else>
      logged in !
      <p>{{ $auth.user }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',

  auth: false,
}
</script>
