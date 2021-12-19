<template>
  <div>
    <h1 class="text-title-main" v-text="$auth.user.display_name" />
  </div>
</template>
<script>
export default {
  name: 'UserPage',
}
</script>
